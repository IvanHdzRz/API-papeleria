import {Router} from 'express'
import {connect as dbcon} from '../../src/connectionBD'
const router=Router();

router.get('/',async (req,res)=>{
    const productos =await (await dbcon()).query('select * from productos');
    res.json({productos});

})



export default router;
