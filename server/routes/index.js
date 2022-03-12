const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("http://localhost:5000/api/");
    res.send({ title: "hello react!" });
});

module.exports = router;
