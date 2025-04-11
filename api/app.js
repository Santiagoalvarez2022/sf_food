import express from 'express';
import cors from 'cors'
import mainRouter from './routes/index.js';
import cookieParser from 'cookie-parser';
const app = express()
  
// Middleware settings for CORS (Cross-Origin Resource Sharing)
// This allows requests from an unique origin
const corsOptions = {
    origin : 'https://localhost:3000',
    optionsSuccessStatus: 200,
    credentials: true,   
}
app.use(cors(corsOptions))
// Parse incoming requests with JSON payloads and make the data available in req.body
app.use(express.json())

// Middleware to parse cookies from incoming HTTP requests
// This allows us to access cookies using req.cookies
app.use(cookieParser());

//router
app.use('/api', mainRouter)



export default app;




 

