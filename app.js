require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const conn = require("./config/db");

conn();
const starterFruits = require('./config/seed');
const Fruit = require('./models/fruit')
const fruitRoutes = require('./routes/fruitRoutes');

app.use(express.json())
app.use('/api/fruits', fruitRoutes)



app.get('/', (req, res)=>{
    res.send('Home Page!')
})

app.get('/fruits/seed', async (req, res) => {
    try {
        await Fruit.deleteMany({})
        await Fruit.create(starterFruits);
        res.json(starterFruits);
    } catch (error) {
        console.log(`Something went wrong loading seed data: ${error.message}`);
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});