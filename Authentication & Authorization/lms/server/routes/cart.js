import express from "express";
import Session from "../models/Session.js";
import Course from "../models/Course.js";
import Cart from "../models/Cart.js";

const router = express.Router();

// GET cart
router.get("/", async (req, res) => {
  const sid = req.signedCookies.sid
  const session = await Session.findById(sid).populate('data.cart.courseId')
  if (!session.userId) {
    const cartCourses = session.data.cart.map(({ courseId, quantity }) => {
      const { id, name, price, image } = courseId
      return {
        id,
        name,
        image,
        price,
        quantity
      }
    })
    return res.json(cartCourses)
  }

  const data = await Cart.findOne({ userId: session.userId }).populate('courses.courseId')
  const cartCourses = data.courses.map(({ courseId, quantity }) => {
    const { id, name, price, image } = courseId
    return {
      id,
      name,
      image,
      price,
      quantity
    }
  })
  res.json(cartCourses)
});

// Add to cart
router.post("/", async (req, res) => {
  const courseId = req.body.courseId
  const sid = req.signedCookies.sid
  const createdSession = await Session.findById(sid)
  if (createdSession.userId) {
    const cart = await Cart.updateOne({
      userId: createdSession.userId,
      'courses.courseId': courseId
    }, {
      $inc: {
        'courses.$.quantity': 1
      }
    })

    if (cart.matchedCount === 0) {
      await Cart.updateOne({
        userId: createdSession.userId
      }, {
        $push: {
          'courses': {
            courseId,
            quantity: 1
          }
        }
      })
    }

    return res.status(201).json({ message: 'Course added to the cart successfully.' })
  }
  const session = await Session.updateOne({
    _id: sid,
    'data.cart.courseId': courseId
  }, {
    $inc: {
      'data.cart.$.quantity': 1
    }
  })

  if (session.matchedCount === 0) {
    await Session.updateOne({
      _id: sid
    }, {
      $push: {
        'data.cart': {
          courseId,
          quantity: 1
        }
      }
    })
  }

  res.status(201).json({ message: 'Course added to the cart successfully.' })
});

// Remove course from cart
router.delete("/:courseId", async (req, res) => {
  const courseId = req.params.courseId
  const sid = req.signedCookies.sid
  const createdSession = await Session.findById(sid)
  if (createdSession.userId) {
    const session = await Cart.updateOne({ userId: createdSession.userId }, {
    $pull: {
      'courses': { courseId }
    }
  })
  return res.json({ message: 'Cart item deleted.' })
  }
  const session = await Session.updateOne({ _id: sid }, {
    $pull: {
      'data.cart': { courseId }
    }
  })
  res.json({ message: 'Cart item deleted.' })
});

// Clear cart
router.delete("/", async (req, res) => {
  //Add your code here
});

export default router;
