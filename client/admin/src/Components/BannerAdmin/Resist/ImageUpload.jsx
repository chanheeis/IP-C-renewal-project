import React,{useState} from 'react';

//Material Components and methods
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

//Imported React Components
import Thumbnail from './Thumbnail';

const useStyles=makeStyles(theme=>({
    root:{
        width:'400px',
        height:'600px',
        boxSizing:'border-box',
        position:'relative',
        borderRadius:'10px',
        justifyContent:'center',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:`3px solid ${theme.palette.secondary.main}`,
        background:'#FFF'
    },
    icon:{
        color:theme.palette.text.secondary,
        position:'absolute',
        top:'10px',
        right:'10px',
        cursor:'pointer',
        '&:hover':{
            color:theme.palette.accent.main
        }
    },
    upload_btn:{
        width:'max-content',
        height:'auto',
        background:theme.palette.secondary.light,
        border:theme.palette.accent.light,
        '&:hover':{
            background:theme.palette.accent.light,
            border:theme.palette.secondary.light,
        }
    },
    upload_typo:{
        color:'#FFF',
        fontFamily:"'Noto Sans KR', sans-serif"
    }
}));

const makeBase64URL=(file)=>{
    return new Promise((resolve,reject)=>{
        const fr=new FileReader();
        fr.readAsDataURL(file)
        fr.onload=()=>{
            resolve({
                name:file.name,
                url:fr.result
            });
        };
        fr.onerror=()=>{
            reject('Error occured during file upload...'+file.name);
        }
    })
};

const ImageUpload = () => {
    const classes=useStyles();
    const [thumbnail,setThumbnail]=useState(null);
    const _deleteThumbnail=()=>{
        setThumbnail(null);
    };

    const _handleChange=async(e)=>{
        const image=e.target.files[0];
        const result=await makeBase64URL(image);
        setThumbnail(result);
    }
    
    const route=()=>{
        if(Boolean(thumbnail)){
            return(
                <Thumbnail
                    isFade={Boolean(thumbnail)}
                    thumbnail={thumbnail}
                    _deleteThumbnail={_deleteThumbnail}
                />                
            )
        }else{
            return(
                <Button
                    className={classes.upload_btn}
                    variant="contained"
                    component="label"
                >
                    <input 
                        style={{display:'none'}}
                        type="file"
                        name="upload"
                        accept=".png, .jpg, .jpeg"
                        onChange={_handleChange}
                    />
                    <Typography className={classes.upload_typo}>
                        이미지 업로드
                    </Typography>
                </Button>
            )
        }
        
    }

    return (
        <div className={classes.root}>
            <AttachFileIcon
                className={classes.icon}/>
            {route()}
        </div>
    );
};

export default ImageUpload;