import express from "express"
import dotenv from "dotenv"
import proxy from "express-http-proxy"  // THIS USE as middleware proxy server just transparently forward HTTP requests to another server
dotenv.config()
import cors from "cors"
import cookieParser from "cookie-parser"
const port = process.env.PORT       

const app = express()

app.use(cors({
    origin:process.env.FRONTENE_URL,
    credentials:true
}))

app.use(cookieParser())
app.use("/auth",proxy(process.env.AUTH_SERVICE)) 

app.get("/",(req,res) => {
    res.json({message: "hello from gateway"})
})

app.listen(port, () => {
    console.log(`gateway started at ${port}`)  
})
