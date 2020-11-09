import {connect as dbcon} from '../connectionBD';

export const getAllCategories= async(req,res)=>{
    (await dbcon()).query('SELECT * FROM categorias')
        .then(brands=>{
            res.json(brands);
        }).catch(e=>{
            res.json(e);
        })
}