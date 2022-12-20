import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: {
        require: true,
        type: String,
        unique: true,
    },
    email: {
        require: true,
        type: String,
        unique: true,
    },
    password: {
        require: true,
        type: String,
    }
})

export const UserModel = mongoose.model("User", UserSchema)