const express = require('express')

//invoke express app
const app = express()

//listening to requests
app.listen(4000, () => {
    console.log('listening on port 4000')
})