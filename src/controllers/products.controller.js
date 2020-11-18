import {connect as dbcon} from '../connectionBD';

export const createProduct= async (req,res)=>{
    //se extraen los atributos del producto del cupero de la solicitud
    const {
        nombre,
        imagen,
        precio,
        id_marca,
        id_cat,
        id_unidad,
        contenido,
        fraccionable,
        codigo_barras,
        stock,
        stock_min}= req.body;
    //se llama a procedimiento almacenado insertar producto
    (await dbcon()).query(
            'CALL insertProducto(?,?,?,?,?,?,?,?,?,?,?);',
            [nombre,imagen,precio,id_marca,id_cat,id_unidad,contenido,fraccionable,codigo_barras,stock,stock_min]
        )//si lo logra insertar devuelve el id del producto
        .then(producto=>{
            res.json(producto[0]);
        })// si no devuelve el codigo de error
        .catch(e=>{
          res.json(e);
            
        })
    
    
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
    const product =await (await dbcon()).query('call getProductById(?);',id);
    res.json(product[0]);
    //res.json(productos);
}