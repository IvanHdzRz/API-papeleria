import {connect as dbcon} from '../connectionBD';

export const getAllBrands= async(req,res)=>{
    (await dbcon()).query('SELECT * FROM marcas')
        .then(brands=>{
            res.json(brands);
        }).catch(e=>{
            res.json(e);
        })
}