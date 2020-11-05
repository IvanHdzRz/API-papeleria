import {Router} from 'express'
import {createProduct,getAllproducts} from '../controllers/products.controller'

const router=Router();

router.get('/',createProduct);
router.get('/:page',getAllproducts);



export default router;
