const express = require('express')
const {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
} = require('../controllers/workoutController')

//router function to get access to app
const router = express.Router()

//Get all workouts
router.get('/', getWorkouts)

//Get a single workout
router.get('/:id', getSingleWorkout)

//Post a new workout
router.post('/', createWorkout)

//Delete a single workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE a new workout'})
})

//Update a single workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE an existing workout'})
})

module.exports = router

