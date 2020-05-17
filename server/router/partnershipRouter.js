const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    console.log('partnershipRouter root url');
})

module.exports=router;