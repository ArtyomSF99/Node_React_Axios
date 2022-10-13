const express =require('express')
var cors = require('cors')
const apiRouter = require('./routes/apiRouter')
const authRouter = require('./routes/authRouter')

const PORT = process.env.PORT || 8000

const app = express()
app.use(cors())
app.use(express.json())


app.use('/auth', authRouter)
app.use('/api', apiRouter)

app.listen(PORT, () => {
    console.log(`Server started on port: ${PORT}`)
    
})
