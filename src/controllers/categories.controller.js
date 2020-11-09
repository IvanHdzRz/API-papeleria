import {connect as dbcon} from '../connectionBD';

export const getAllCategories= async(req,res)=>{
    (await dbcon()).query('SELECT * FROM categorias')
        .then(categories=>{
            res.json(categories);
        }).catch(e=>{
            res.json(e);
        })
}