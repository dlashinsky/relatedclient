const express = require('express')
const rowdy = require('rowdy-logger')
const morgan = require('morgan')
const cors = require('cors')
require('dotenv').config()




const app = express()
const PORT = process.env.PORT || 3001
const rowdyResults = rowdy.begin(app)

app.use(morgan('tiny'))
app.use(cors())


app.use(express.json())

app.get('/', (req, res) =>{
    res.send("ITS WORKING")
})

app.listen(PORT, () =>{
    rowdyResults.print()
    console.log(`SHE up N' runnin' on dat 'dere port ${PORT}!  Get on wit it.  Life's a garden; DIG IT!`)
})