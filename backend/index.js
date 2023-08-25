const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello Everyone!")
})

app.listen(8000,async()=>{
    try {
        await mongoose.connect()
        console.log("connected to DB")
    } catch (error) {
        console.log(error);
    }
    console.log(`Server is running at port 8000`);
})