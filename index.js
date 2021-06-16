const express = require("express")
const app = express()

const routes = require("./routes/routes")

// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())


app.use('/',routes)


app.listen(8000, ()=>{console.log("Server running on 8000")})