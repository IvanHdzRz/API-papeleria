import {connect as dbcon} from '../connectionBD';

export const createProduct= async (req,res)=>{
    
/*     const productos =await (await dbcon()).query('CALL insertProducto('prueba','url.com',15,1,1,1,50,0,'071234321',10,5);');
    res.json({productos}); */
}

export const getAllproducts=async(req,res)=>{   
    /*extraer esta logica de paginacion*/
    const itemsPerPage=15;
    const page=parseInt(req.params.page);
    const offset=(page-1)*itemsPerPage;
    const countProducts= await (await dbcon()).query("select count(id_articulo) as 'items' from productos");
    const totalproducts=countProducts[0].items;
    const numberOfpages=Math.ceil(totalproducts/itemsPerPage);
    /*fin logica de paginacion*/
    const products =await (await dbcon()).query('select * from productos LIMIT ?, ?;',[offset,itemsPerPage]);
    const resbody={
        totalproducts,
        page,
        numberOfpages,
        products
    }
    res.json(resbody);
    //res.json(productos);
}

export const getproductsById=async(req,res)=>{   
    const id= parseInt(req.params.id);
    const product =await (await dbcon()).query('select * from productos WHERE id_articulo=?;',id);
    res.json(product);
    //res.json(productos);
}