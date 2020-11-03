import express from 'express'
import morgan from 'morgan'
import bd from './connectionBD'

const app=express();
app.use(morgan('dev'));

app.get('/', async (req,res)=>{
    console.log('get from main');
    
    
    res.json('uwu');
})

export default app;