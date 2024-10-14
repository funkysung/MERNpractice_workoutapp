require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

//invoke express app
const app = express()

//middleware - tells express application to automatically parse incoming requset body in json format
//than will make info available on req.body
app.use(express.json())
//middleware - logs path and methods used in terminal
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

//listening to requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT )
})