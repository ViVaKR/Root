const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.send("I am a endpoint")
})


app.listen(7777, () => {
    console.log("listening on port 7777")
})


