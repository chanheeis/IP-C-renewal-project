const express=require('express');
const router=express.Router();
const rootPath=require('app-root-path');
const multer=require('multer');

//MYSQL 관련 코드
const config=require('../config');
const mysql=require('mysql');
const conn=mysql.createConnection(config.database);

//bodyParser 모듈 사용을 위한 코드
const bodyParser=require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended:false}));

//Thumbnail 생성을 위한 모듈 load
const thumb=require('node-thumbnail').thumb;

//Multer 모듈 사용을 위한 코드
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,`${rootPath.toString()}/../client/admin/public/static/uploads/image`)
    },
    filename:(req,file,cb)=>{
        const temp=file.originalname.split('.');
        const fileName=`${Date.now()}.${temp[1]}`;
        
        //req객체에 현재 fileName을 저장(썸네일 저장 시 참고용)
        req.fileName=fileName;
        cb(null,fileName);
    }
})
const upload=multer({storage});
const cpUpload=upload.fields([{name:'image',maxCount:1}]);

router.post('/resist',cpUpload,(req,res)=>{
    const thumbOpt={
        source:`${rootPath.toString()}/../client/admin/public/static/uploads/image/${req.fileName}`,    
        destination:`${rootPath.toString()}/../client/admin/public/static/uploads/thumbnail`,
        prefix:'',
        suffix:'_thumbnail',
        width:300
    };
    thumb(thumbOpt,(files,err,stdout,stderr)=>{
        const image_url=`static/uploads/image/${req.fileName}`;
        const thumbnail_url=`static/uploads/thumbnail/${req.fileName}`;
        const {title,subtitle,date}=req.body;
        const query=`
            INSERT INTO PORTFOLIO 
            (admin_id,title,subtitle,date,image_url,thumbnail_url) 
            VALUES (?,?,?,?,?,?)
        `;
        const queryArr=['admin',title,subtitle,date,image_url,thumbnail_url];
        conn.query(query,queryArr,(err,result)=>{
            const resMsg=Boolean(err)?'DB_QUERY_FAIL':'DB_QUERY_SUCCESS';
            res.json({response:resMsg});
        })
    })
});

router.get('/delete',(req,res)=>{
    const query=`SELECT * FROM PORTFOLIO`;
    conn.query(query,(err,result)=>{
        const resMsg=Boolean(err)?'DB_QUERY_FAIL':result;
        res.json({response:resMsg});
    });
});

router.post('/delete',(req,res)=>{
    const id=req.body.id;
    const query=`DELETE FROM PORTFOLIO WHERE id=?`;
    const queryParam=[id];
    conn.query(query,queryParam,(err,result)=>{
        const resMsg=Boolean(err)?'DB_QUER_FAIL':result;
        res.json({response:resMsg});
    })
});

router.get('/modify',(req,res)=>{
    const query=`SELECT * FROM PORTFOLIO`;
    conn.query(query,(err,result)=>{
        const resMsg=Boolean(err)?'DB_QUERY_FAIL':result;
        res.json({response:resMsg});
    })
})

router.post('/modify',(req,res)=>{
    const query=`
        UPDATE PORTFOLIO SET
        title=? , subtitle=? , date=?
        WHERE id=?
    `;
    const {title,subtitle,date,id}=req.body;
    const queryArr=[title,subtitle,date,id];
    conn.query(query,queryArr,(err,result)=>{
        const resMsg=Boolean(err)?'DB_QUERY_FAIL':result;
        res.json({response:resMsg});
    })
})

module.exports=router;