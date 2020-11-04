import { decodeBase64 } from 'bcryptjs';
import express from 'express'
import morgan from 'morgan'
import {connect as dbcon} from './connectionBD'

const app=express();
app.use(morgan('dev'));

app.get('/', async (req,res)=>{
    const productos =await (await dbcon()).query('select * from productos');
    res.json({productos});
})

export default app;