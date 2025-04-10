const express = require("express");
const router = express.Router();


//posts
//index 
router.get("/", (req,res) => {
    res.send("here are all the posts");
})

//show 
router.get("/:id", (req,res) => {
    res.send("GET for shoe posts id");
})

//POST 
router.post("/", (req,res) => {
    res.send("POST for posts");
})

//DELETE - users
router.delete("/:id", (req,res) => {
    res.send("DELETE for posts id");
})

module.exports = router;