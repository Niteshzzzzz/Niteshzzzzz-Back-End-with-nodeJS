import express from "express";
import bcrypt from "bcrypt";
import { rateLimit } from 'express-rate-limit'

const app = express();
const PORT = 4000;

const limiter = rateLimit({
	windowMs: 10000, //
	limit: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
})

app.use(limiter)

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});


app.get("/register", async (req, res) => {
    bcrypt.hashSync("123456", 14);
    return res.json({ message: "Registered Successfully" });
  }
);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Visit http://localhost:${PORT}`);
});
