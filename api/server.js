import 'dotenv/config'; 
import app from "./app.js";
import {connectionToDataBase} from './config/database.js';
import './models/index.js'
import fs from 'fs'
import https from 'https'
import path from 'path';


connectionToDataBase()

if (process.env.NODE_ENV === 'development') { 
    console.log('entre modo desarrollo');
    
    const keyPath = path.resolve('./certs/key.pem');
    const certPath = path.resolve('./certs/cert.pem');

    const key = fs.readFileSync(keyPath);
    const cert = fs.readFileSync(certPath);

    const server = https.createServer({ key, cert }, app);

    server.listen(process.env.PORT , () => {
      console.log(`HTTPS Server is running in development on port ${process.env.PORT }`);
    });
} else {
    app.listen(process.env.PORT || 3001,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })   
}