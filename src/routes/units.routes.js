import Router from 'express'
import {getAllUnits} from '../controllers/units.controller'

const router= Router();

router.get('/all',getAllUnits);



export default router;