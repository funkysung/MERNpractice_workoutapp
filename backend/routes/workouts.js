const express = require('express')

//router function to get access to app
const router = express.Router()

//Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'GET all workouts'})
})

//Get a single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single workout'})
})

//Post a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'POST a new workout'})
})

//Delete a single workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//Update a single workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an existing workout'})
})

module.exports = router

