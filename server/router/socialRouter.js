const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    console.log('socialRouter root url');
})

module.exports=router;