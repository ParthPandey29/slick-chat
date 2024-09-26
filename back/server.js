const express = require("express")
const dotenv=require("dotenv");
const {chats} = require("./data/data");
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const {notFound,errorHandler} = require("./middleware/errorMiddleware")

dotenv.config()
connectDB()
const app=express()
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("api check")
})
app.use('/api/user',userRoutes)
app.use(notFound)
app.use(errorHandler)
const port=process.env.PORT || 5000
app.listen(port,console.log("app running"))