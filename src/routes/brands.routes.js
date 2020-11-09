import Router from 'express'
import {getAllBrands} from '../controllers/brands.controller'

const router= Router();

router.get('/all',getAllBrands);



export default router;