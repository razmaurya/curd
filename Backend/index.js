import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import homeRoute from './Routes/homeRoute.js';
const app = express();
app.use(cors());

app.use('/api', homeRoute)


app.listen(3000, () => {
    console.log('http://localhost:3000');
})