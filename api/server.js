import 'dotenv/config'; 
import app from "./app.js";
import {connectionToDataBase} from './config/database.js';
import './models/index.js'

connectionToDataBase()

app.listen(process.env.PORT || 3000,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
})   