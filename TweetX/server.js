const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')

// server initialize
const app = express()

//connect to Database
connectDB()

// Init middleware
app.use(express.json({ extended: false }))

// app.use(function (req,res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Methods', 'GET, POST,DELETE,PUT')
//   res.header('Access-Control-Allow-Headers','Content-Type')
//   next()
// })
app.use(cors())

app.get('/', (req, res) => res.send('API RUNNING'))


// Define Routes
app.use('/api/user', require('./routes/api/user'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/post', require('./routes/api/post'))

// Port variable
const PORT = process.env.PORT || 5000

// port listen
app.listen(PORT, () => console.log(`server started on port ${PORT}`))