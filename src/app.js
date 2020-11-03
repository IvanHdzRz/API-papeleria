import express from 'express'
import morgan from 'morgan'

const app=express();
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    console.log('get from main');
    res.json('uwu');
})

export default app;