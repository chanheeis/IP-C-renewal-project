import React from 'react';

//Material components and method
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    text_wrapper:{
        width:'400px',
        marginTop:'10px'
    },
    title:{
        textAlign:'center',
        color:'#FFF',
        fontFamily:"'Noto Sans KR', sans-serif",
        margin:'10px 0px'
    },
    textField:{
        width:'380px',
        padding:'10px',
        borderRadius:'10px',
        border:'none',
        color:theme.palette.primary.main,
        fontSize:'15px',
        fontFamily:"'Noto Sans KR', sans-serif",
        '&:foucs':{
            outline:'none'
        }
    }
}))
const LinkUpload = () => {
    const classes=useStyles();
    return (
        <div className={classes.text_wrapper}>
            <Typography className={classes.title}>
                사진에 첨부할 링크를 입력하세요
            </Typography>
            <input
                className={classes.textField} 
                type="text"
                spellCheck={false}
                placeholder="https://"
            />
        </div>
    );
};

export default LinkUpload;