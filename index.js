const express = require("express")
    const mongoose = require("mongoose") // new
    const routes=require("./routes")
    // Connect to MongoDB database
    mongoose
        .connect("mongodb://127.0.0.1:27017/posts")
        .then(() => {
            const app = express()
            app.use(express.json())
            app.use("/api",routes)
            app.listen(5000, () => {
                console.log("Server has started!")
            })
        })