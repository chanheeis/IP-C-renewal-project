import React,{useState} from 'react';

//Material Components and methods
import Button from '@material-ui/core/Button';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import Typography from '@material-ui/core/Typography';
import useStyles from '../Styles/Resist.ImageUpload';

//Imported React Components
import Thumbnail from './Thumbnail';

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

const ImageUpload = ({_setResistData}) => {
    const classes=useStyles();
    const [thumbnail,setThumbnail]=useState(null);
    const _deleteThumbnail=()=>{
        setThumbnail(null);
        
        _setResistData('image',null);
        _setResistData('title',null);
        _setResistData('subtitle',null);
        _setResistData('date',null);
    };

    const _handleChange=async(e)=>{
        const image=e.target.files[0];
        _setResistData('image',image)
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
                    _setResistData={_setResistData}
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