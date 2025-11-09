import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/CartRoute.js'
import orderRouter from './routes/OrderRoute.js'
import router from "./routes/aiRoutes.js";



//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()




//middleware
app.use(cors())
app.use(express.json())


//API endpoints

app.use("/api/user", userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)


//Ai endpoint

app.use("/api/ai", router);


app.get("/", (req, res) => {
          res.send("API working")
})

app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
})
