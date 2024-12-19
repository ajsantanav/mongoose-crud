const mongoose = require('mongoose')

const conn = async () => {
   mongoose.connect(process.env.MONGO_URI);
    mongoose.connection.once("open", () => {

        console.log("Connected to MongoDB");
    });
}
module.exports = conn;