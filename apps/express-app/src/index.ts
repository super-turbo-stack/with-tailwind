import express, { Request, Response } from 'express'
import { userRoute } from '@/routes/index'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config({ path: './env' })
const PORT = process.env.PORT || 6969
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api/v1/users', userRoute)
app.get('/', (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Server working fine!!',
  })
})
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
