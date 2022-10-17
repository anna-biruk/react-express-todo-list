const express = require("express");
const router = require('./src/routes/router')
const cors = require("cors")


const app = express()
const port = 3000
app.use(cors())
app.use(express.urlencoded({extended: false}))

// parse application/json
app.use(express.json())


app.use('/api', router)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
