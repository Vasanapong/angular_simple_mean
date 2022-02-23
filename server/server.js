const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const blogRoute = require('./routes/blogRoute')

app.use(express.json())
app.use(cors())

app.use('/api',blogRoute)

const port = process.env.PORT || 3030
app.listen(port,()=>console.log(`app is running on port ${port}`))