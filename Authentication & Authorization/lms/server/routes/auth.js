import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Session from "../models/Session.js";
import Cart from "../models/Cart.js";

const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      email,
      password,
      name,
    });

    await user.save();

    res.status(201).json({
      message: "User registered successfully"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login user
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const sid = req.signedCookies.sid
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const session = await Session.findById(sid)
    if (session) {
      session.userId = user._id
      session.expires = Math.round(Date.now() / 1000) + 60 * 60 * 24 * 30

      const cart = await Cart.findOne({ userId: user._id })

      if (cart) {
        session.data.cart.map((cartData) => {
          cart.courses.push(cartData)     
        })
        await cart.save()
        session.data = {}
        await session.save()
        return res.json({
        message: "Login successful",
        email: user.email,
        name: user.name
      });
      }


      await Cart.create({ userId: user._id, courses: session.data.cart })
      session.data = {}
      await session.save()
      res.cookie('sid', session.id, {
        httpOnly: true,
        signed: true,
        maxAge: 1000 * 60 * 60 * 24 * 30
      })

      return res.json({
        message: "Login successful",
        email: user.email,
        name: user.name
      });
    }
    const createdSession = await Session.create({ userId: user._id })
    res.cookie('sid', createdSession.id, {
      httpOnly: true,
      signed: true,
      maxAge: 1000 * 60 * 60 * 24 * 30
    })

    return res.json({
      message: "Login successful",
      email: user.email,
      name: user.name
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/profile', async (req, res) => {
  const sid = req.signedCookies.sid
  try {
    const session = await Session.findById(sid)
    if (!session || !session.userId) {
      return res.status(401).json({ message: 'User not logedin!' })
    }

    if (session.expires < Math.round(Date.now() / 1000)) {
      await session.deleteOne()
      return res.status(401).json({ message: 'User not logedin!' })
    }

    const user = await User.findById(session.userId)
    res.json({
      email: user.email,
      name: user.name
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
})

router.post('/logout', async (req, res) => {
  const sid = req.signedCookies.sid
  await Session.findByIdAndDelete(sid)
  res.json({message: 'User logout successful.'})
})

export default router;
