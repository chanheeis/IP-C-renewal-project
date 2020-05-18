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
                포트폴리오와 연결할 유튜브 링크를 입력하세요. (선택)
            </Typography>
            <input
                className={classes.textField}
                name="linked_url" 
                type="text"
                spellCheck={false}
                placeholder="https://"
                onChange={_handleChange}
            />
        </div>
    );
};

export default LinkUpload;