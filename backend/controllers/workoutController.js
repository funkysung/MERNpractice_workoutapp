const Workout = require('../models/workoutModel')
const mongoose = require('mongoose')

//get all workouts
const getWorkouts = async (req, res) => {
    //return all the documents
    const workouts = await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout (invalid ID)'})
    }

    const workout = await Workout.findById(id)

    //this allows break and stop function if no workouts found (due to return function)
    if (!workout) {
        return res.status(404).json({error: 'No workout found'})
    }

    res.status(200).json(workout)
}

//create new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body
    
    //add doc to db
    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout (invalid ID)'})
    }

    const workout = await Workout.findOneAndDelete({_id: id})
    //if workout cant be found, return error
    if (!workout) {
        return res.status(400).json({error: 'No workout found'})
    }
    //else statement. if workout found, delete and return
    res.status(200).json(workout)
}

//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params
    //check if id is valid
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such workout (invalid ID)'})
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        //spreads out elements from the body of req object, and update relevant parameters
        ...req.body
    })
    if (!workout) {
        return res.status(400).json({error: 'No workout found'})
    }
    //else statement. if workout found, delete and return
    res.status(200).json(workout)
}

module.exports = {
    getWorkouts,
    getSingleWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}