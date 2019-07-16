const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const routes = require("./routes")

app.use(bodyParser.json())
routes(app)

app.listen(3000, () => {
    console.log("Server running on: http://localhost:3000")
})