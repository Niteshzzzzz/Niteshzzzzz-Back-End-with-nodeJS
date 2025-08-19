import mongoose from "mongoose";
import User from "./UserModel.js";

const user = await User.find({ email: "ramesh@gmail.com" });
await User.insertOne({
    name: 'vishal',
    age: 22,
    email: 'vishal@gmail.com'
})

// console.log(user);

await mongoose.disconnect();
