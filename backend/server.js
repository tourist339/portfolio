import express from "express"
import cors from "cors"
import restraunts from "./api/restraunts.route.js"

const app=express()
app.use(cors())
app.use(express.json())

app.use("/api/v1/restraunts",restraunts)

app.use("*",(req,res)=>res.status(404).json({error:"Resource not found"}))

export default app