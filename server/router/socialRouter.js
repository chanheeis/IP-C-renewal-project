const express=require('express');
const router=express.Router();
//MYSQL 관련 코드
const config=require('../config');
const mysql=require('mysql');
const conn=mysql.createConnection(config.database);

//bodyParser 모듈 사용을 위한 코드
const bodyParser=require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

router.get('/resist',(req,res)=>{
    const query=`SELECT * FROM SOCIAL_URL`;
    conn.query(query,(err,result)=>{
        if(!err){
            res.json({
                response:'DB_QUERY_SUCCESS',
                data:result
            });
        }else{
            res.json({
                response:'DB_QUERY_FAIL'
            });
        }
    })
});
router.post('/resist',(req,res)=>{
    const {channel,url}=req.body;
    const query=`UPDATE SOCIAL_URL SET url=? WHERE channel=?`;
    const queryArr=[url,channel];
    conn.query(query,queryArr,(err,result)=>{
        if(!err && result.changedRows===1) {    
            res.json({response:'DB_QUERY_SUCCESS'});
        } else if(!err && result.changedRows===0) {
            res.json({response:'NOT_UPDATED'});
        } else if(err) {
            res.json({response:'DB_QUERY_FAIL'});
        }
    })
})

module.exports=router;