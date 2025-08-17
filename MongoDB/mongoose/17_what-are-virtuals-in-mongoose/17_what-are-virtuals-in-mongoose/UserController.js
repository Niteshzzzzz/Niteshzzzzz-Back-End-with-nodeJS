import mongoose from "mongoose";
import User from "./UserModel.js";

await User.insertOne({
    name: 'ramesh',
    age: 18,
    email: 'ramesh@gmail.com'
})

const user = await User.findOne({ email: "ramesh@gmail.com" });

user.hobbiesString = "TT, Football";

console.log(user.hobbiesString);
console.log(user.emailDomain);

// await user.save();
// console.log(user.hobbiesString);
// console.log(user.isAdult);

// console.log(user);
// console.log(user.schema.virtuals);
// console.log(User.schema.virtuals);
console.log(user.toJSON());

await mongoose.disconnect();
