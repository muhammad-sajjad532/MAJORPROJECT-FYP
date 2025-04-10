const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");



app.listen(3000, () => {
    console.log("server is running on port 3000");
})