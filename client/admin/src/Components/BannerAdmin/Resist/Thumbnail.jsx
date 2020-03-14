import React from 'react';

//Material Components and methods
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade'
import {makeStyles} from '@material-ui/core/styles'

//Imported React Components
import TitleWrapper from './TitleWrapper';


const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100%',
        position:'relative',
        borderRadius:'5px',
        overflow:'hidden',
        margin:0
    },
    cancel_icon:{
        position:'absolute',
        top:'5px',
        right:'5px',
        cursor:'pointer',
        zIndex:100,
        color:'#FFF',
        '&:hover':{
            color:theme.palette.accent.light
        }
    },
    img_wrapper:{
        width:'100%',
        height:'100%',
        position:'relative',
    },
    thumbnail:{
        width:'100%',
        height:'100%',
        position:'absolute',
    },
    thumbnail_typo:{
        color:'#FFF',
        fontFamily:"'Noto Sans KR', sans-serif",
        zIndex:100,
        position:'absolute',
        bottom:'10px',
        left:'10px'        
    }
}))

const Thumbnail = ({thumbnail,_deleteThumbnail,isFade}) => {
    const classes=useStyles();

    return (
        <Fade
            in={isFade}
            timeout={1000}>
            <div className={classes.root}>
                <CancelIcon
                    onClick={()=>_deleteThumbnail()}
                    className={classes.cancel_icon}/>
                <Typography className={classes.thumbnail_typo}>
                    {thumbnail.name}
                </Typography>
                <div className={classes.img_wrapper}>
                    <img
                        className={classes.thumbnail}
                        alt={thumbnail.name}
                        src={thumbnail.url}
                    />
                </div>
                <TitleWrapper/>            
            </div>
        </Fade>
    );
};

export default Thumbnail;