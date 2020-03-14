import React from 'react';
//Material Components and methods
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import useStyles from '../Styles/Resist.AccountInfo';
const getDate=()=>{
    const current=new Date();
    return current;
};

const AccountInfo = ({userName}) => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <AccountCircleIcon className={classes.icon}/>
            <Typography className={classes.typo}>
                {userName}
            </Typography>
            <Typography className={classes.typo}>
                {getDate().toString()}
            </Typography>
        </div>
    );
};

export default AccountInfo;