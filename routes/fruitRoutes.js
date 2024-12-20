const express = require('express')
const router = express.Router()
const Fruit = require('../models/fruit')
const { error } = require('console')

router.get("/", async (req, res) => {
    try {
      const allFruit = await Fruit.find({});
      res.json(allFruit);
    } catch (error) {
      res.status(500).json({error: error.message})
    }
  });


router.post('/', async(req, res)=> {
    console.log(req.body)
    try {
        const createdFruit = await Fruit.create(req.body)
        res.json(createdFruit)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//show route - get 1 fruit 
router.get('/:id', async (req, res) => {
    try {
        const fruit = await Fruit.findById(req.params.id);
        res.json(fruit)
    }
    catch (error) {
        res.status(500).json({error: error.message})     
    }

});


//put / edit / update route -  take a value {name, color or etc} and change somethings

router.put('/:id', async (req, res) => {
    try {
        const updateFruit = await Fruit.findByIdAndUpdate(req.params.id, req.body);
        res.json(updateFruit)
    }
    catch (error) {
        res.status(500).json({error: error.message}) 
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const deleteFruit = await Fruit.findByIdAndDelete(req.params.id);
        res.json(deleteFruit)
    }
    catch (error) {
        res.status(500).json({error: error.message}) 
    }
});
module.exports = router;