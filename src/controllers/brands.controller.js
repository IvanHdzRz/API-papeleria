import {connect as dbcon} from '../connectionBD';

export const getAllBrands= async(req,res)=>{
    //se hace conexion a base de datos y se manda consulta
    (await dbcon()).query('SELECT * FROM marcas')
        .then(brands=>{
            //si se logra conectar a la bd
            res
                .status(200) //status ok
                .json(brands) // info
                .end();       //termina respuesta
            
        }).catch(e=>{
            //si ocurrio algun error
            res
                .status(500) //status error del server
                .json({e:e}) //manda info del error
                .end();     //termina respuesta
        })
}