import {Router} from 'express'
import {createProduct,getAllproducts,getproductsById} from '../controllers/products.controller'

const router=Router();

router.post('/',createProduct);
router.get('/all/:page',getAllproducts);
router.get('/:id',getproductsById);




export default router;
