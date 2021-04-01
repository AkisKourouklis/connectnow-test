import 'dotenv/config'
import express from 'express'
import { PORT } from './config/constants'
import { userRouter } from './routes'
import connectDB from './config/database'

const app = express()
app.use(express.json())

connectDB()

app.use('/users', userRouter)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port ${PORT}`)
})
