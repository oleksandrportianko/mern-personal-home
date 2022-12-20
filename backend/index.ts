import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'

const PORT = process.env.PORT || 5000 
const ATLAS_API = process.env.ATLAS_API

const app = express()

app.use(cors());
app.use(express.json());

if (ATLAS_API) {
    mongoose.connect(ATLAS_API)
    .then(() => app.listen(() => {
        console.log(`App listening on port ${PORT}`)
    }))
    .catch((error) => console.log(error.message))
}
