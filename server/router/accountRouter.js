const express=require('express');
const router=express.Router();
const bodyParser=require('body-parser');
const CryptoJS=require('crypto-js');

const config=require('../config');
const mysql=require('mysql');
const conn=mysql.createConnection(config.database);


router.use(bodyParser.json())
router.post('/login',(req,res)=>{
    const {id,password}=req.body;
    const wordArray=CryptoJS.SHA512(password);
    const hash=wordArray.toString();
    const queryParam=[id,hash];
    const query=`
        SELECT * FROM ACCOUNT
        WHERE id=? AND pw=?
    `;
    conn.query(query,queryParam,(err,result,fileds)=>{
        if(err){
            throw err;
        }else{
            const isValid=result.length>0?true:false;
            res.json({isValid});
        }
    });
});

module.exports=router;