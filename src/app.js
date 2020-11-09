import { decodeBase64 } from 'bcryptjs';
import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import routesProducts from './routes/products.routes'
import routesBrands from './routes/brands.routes'

const app=express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
app.get('/', async (req,res)=>{
    
    res.json('api de papeleria');
})

app.use('/products',routesProducts);
app.use('/brands',routesBrands);
export default app;