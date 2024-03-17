import express from 'express'
import { userRegister,userLogin,userLogout,getMyProfile } from '../Controllers/user.js'
import { isAuthenticated } from '../middlewares/auth.js';

const router=express.Router();

router.post('/',(req,res)=>{
    res.json({
        success:true,
        message:"home route"
    })
})

router.post('/register',userRegister)
router.post('/login',userLogin)
router.get('/logout',userLogout)
router.get('/myprofile',isAuthenticated,getMyProfile)

export default router;