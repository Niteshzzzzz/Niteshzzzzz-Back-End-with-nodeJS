import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { fetchUserFromGoogle, getGoogleAuthUrl } from "./services/googleAuthService.js";
import { writeFile } from "fs/promises";
import users from "./usersDB.json" with { type: "json" };
import sessions from "./sessionsDB.json" with { type: "json" };
import passport from 'passport'
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'

const app = express();
const PORT = 4000;

app.use(
  cors({
    origin: "http://localhost:5500",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

const clientId =
  "708565128148-kfe4aneo75f3gcb8qbioga46l39rp0d0.apps.googleusercontent.com";
const clientSecret = "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";
const redirectUrl = "http://localhost:4000/auth/google/callback";

// google client setup
passport.use(new GoogleStrategy({
  clientID: clientId,
  clientSecret,
  callbackURL: redirectUrl
},
  function (accessToken, refreshToken, profile, cb) {
    return cb(null, profile);
  }
));

// geting access token
app.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile', 'openid'], prompt: 'consent' }));

// calling userInfo endpoint using access token
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: 'http://localhost:5500/callback.html?error=true', session: false }),
  async (req, res) => {
    const { sub, email, name, picture } = req.user._json;
    const existingUser = users.find(({ id }) => id === sub);

    if (existingUser) {
      const existingSessionIndex = sessions.findIndex(
        ({ userId }) => userId === sub
      );

      const sessionId = crypto.randomUUID();

      if (existingSessionIndex === -1) {
        sessions.push({ sessionId, userId: sub });
      } else {
        sessions[existingSessionIndex].sessionId = sessionId;
      }

      await writeFile("sessionsDB.json", JSON.stringify(sessions, null, 2));
      res.redirect(`http://localhost:5500/callback.html?sid=${sessionId}`);
      return res.end();

    }

    const newUser = { id: sub, email, name, picture };
    users.push(newUser);
    await writeFile("usersDB.json", JSON.stringify(users, null, 2));
    const sessionId = crypto.randomUUID();
    sessions.push({ sessionId, userId: sub });
    await writeFile("sessionsDB.json", JSON.stringify(sessions, null, 2));
    res.redirect(`http://localhost:5500/callback.html?sid=${sessionId}`);
    return res.end();
});


app.get("/session-cookie", async (req, res) => {
  const { sid } = req.query;
  res.cookie("sid", sid, {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true,
  });
  res.end();
});

app.get("/profile", async (req, res) => {
  const { sid } = req.cookies;
  const existingSession = sessions.find(({ sessionId }) => sid === sessionId);
  if (!existingSession) {
    return res.status(401).json({ error: "Not logged in." });
  }

  const existingUser = users.find(({ id }) => id === existingSession.userId);
  if (!existingUser) {
    return res.status(404).json({ error: "User not found." });
  }

  return res.json(existingUser);
});

app.post("/logout", async (req, res) => {
  const { sid } = req.cookies;
  const sessionIndex = sessions.findIndex(({ sessionId }) => sid === sessionId);
  sessions.splice(sessionIndex, 1);
  await writeFile("sessionsDB.json", JSON.stringify(sessions, null, 2));
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
