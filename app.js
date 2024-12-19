require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
// const connectToDatabase = require("./db/conn");
// const posts = require('./routes/posts');


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});