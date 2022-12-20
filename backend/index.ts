import express from 'express'
import cors from 'cors'
import mongoose, { ConnectOptions } from 'mongoose'
import dotenv from 'dotenv'

import UserRoutes from './routes/UserRoutes'

const app = express()

dotenv.config()

const ATLAS_API = process.env.ATLAS_API
const PORT = process.env.PORT || 5000

app.use(cors({
    origin: "*",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
}));
app.use(express.json());
app.use('/', UserRoutes)

if (ATLAS_API) {
    mongoose.set("strictQuery", false);
    mongoose.connect(ATLAS_API, {
        useNewUrlParser: true,
    } as ConnectOptions)
    .then(() => app.listen(() => {
        console.log(`Server running on port: ${PORT}`)
    }))
    .catch((error) => console.log(error.message))
} else {
    console.log("Missing atlas API")
}
