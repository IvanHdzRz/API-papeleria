import {connect as dbcon} from '../connectionBD';

export const createProduct= async (req,res)=>{
    
/*     const productos =await (await dbcon()).query('CALL insertProducto('prueba','url.com',15,1,1,1,50,0,'071234321',10,5);');
    res.json({productos}); */
}

export const getAllproducts=async(req,res)=>{   
    const itemsPerPage=15;
    const {page}=req.params;
    const offset=(page-1)*itemsPerPage;
    console.log(page,itemsPerPage);
    res.json({itemsPerPage,page,offset});
    const productos =await (await dbcon()).query('select * from productos LIMIT ?, ?;',[page,itemPerPage]);
    //res.json(productos);
}
