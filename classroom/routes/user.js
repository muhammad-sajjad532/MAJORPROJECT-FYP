const express = require("express");
const router = express.Router();

//index - users
router.get("/", (req,res) => {
    res.send("here are all the users");
})

//show - users
router.get("/:id", (req,res) => {
    res.send("GET for shoe users id");
})

//POST - users
router.post("/", (req,res) => {
    res.send("POST for users");
})

//DELETE - users
router.delete("/:id", (req,res) => {
    res.send("DELETE for users id");
})

module.exports = router;