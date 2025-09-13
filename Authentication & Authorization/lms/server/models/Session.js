import { model, Schema } from "mongoose";

const sessionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        default: null,
        ref: 'User'
    },
    data: {
        cart: [
            {
                courseId: {
                    type: Schema.Types.ObjectId,
                    ref: 'Course'
                },
                quantity: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    expires: {
        type: Number,
        default: Math.round(Date.now()/1000 + 60 * 60 * 24 * 30)
    }
})

const Session = model('Session', sessionSchema)

export default Session