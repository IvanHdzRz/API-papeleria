import {connect as dbcon} from '../connectionBD';

export const getAllUnits= async(req,res)=>{
    (await dbcon()).query('SELECT * FROM unidades')
        .then(units=>{
            res.json(units);
        }).catch(e=>{
            res.json(e);
        })
}