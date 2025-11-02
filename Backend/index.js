import express from "express"
import dotenv from "dotenv"
import { connectioDb } from "./DB/connection.db.js"
import errorhander from "./middleware/errohandeler.js"
import router from "./routes/router.js"
import cors from "cors"
dotenv.config()
const app=express()
// cors connection 
app.use(cors())

const PORT=process.env.PORT || 4001
// 
app.use(express.json())
//router 
app.use("/auth",router)
//middleware
app.use(errorhander)
const serverStart=async()=>{
    try {
        await connectioDb()
        app.listen(PORT,()=>console.log("server running http://localhost:4001"))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}
serverStart()