require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors');
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

// express app
const app = express()

// Allow requests from all origins
app.use(cors());

// middleware
app.use(express.json())


app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

// connect to mongodb 
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  }).catch(err => console.log(err))



