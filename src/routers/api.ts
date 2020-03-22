import {Router} from 'express'
import { getLastRegister } from '../envirophatRepsitory';

const router = Router()

router.get('/envirophat/last',(req,res)=>{
    getLastRegister((err,data)=>{
        if(err) return res.status(500).send(err.message)
        res.send(data)
    })
})
export default router