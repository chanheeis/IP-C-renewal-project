import React from 'react';

//Material components and method
import Typography from '@material-ui/core/Typography';
import useStyles from '../Styles/Resist.LinkUpload';

const LinkUpload = ({_setResistData}) => {
    const classes=useStyles();

    const _handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        _setResistData(name,value);
    }

    return (
        <div className={classes.text_wrapper}>
            <Typography className={classes.title}>
                사진에 첨부할 링크를 입력하세요
            </Typography>
            <input
                className={classes.textField}
                name="link" 
                type="text"
                spellCheck={false}
                placeholder="https://"
                onChange={_handleChange}
            />
        </div>
    );
};

export default LinkUpload;