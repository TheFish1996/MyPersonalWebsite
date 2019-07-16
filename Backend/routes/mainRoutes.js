const express = require("express")
const router = express.Router();


router.get("/", (req, res) => {
    res.json({test: "Testing API"})
})


module.exports = router