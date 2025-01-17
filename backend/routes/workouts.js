const express = require('express')
const {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
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
router.delete('/:id', deleteWorkout)

//Update a single workout
router.patch('/:id', updateWorkout)

module.exports = router

