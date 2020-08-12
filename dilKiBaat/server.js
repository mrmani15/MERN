const express = require('express');
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express();

connectDB()
app.use(bodyParser.json())
app.use(cors())
app.get('/', (req, res) => res.send('server running'))

app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('server started'))