import express from 'express';
import cors from 'cors'
import mainRouter from './routes/index.js';

const app = express()
 
//midlewares
const corsOptions = {
    origin : '*',
    optionsSuccessStatus: 200,
}
app.use(cors(corsOptions))
app.use(express.json()) // Parse incoming requests with JSON payloads and make the data available in req.body


//router
app.use('/api', mainRouter)



export default app;




 

