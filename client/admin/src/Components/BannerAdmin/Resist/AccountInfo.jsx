import React from 'react';
//Material Components and methods
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    root:{
        display:'flex',
        alignItems:'center',
        marginBottom:'20px'
    },
    icon:{
        color:'#FFF',
        fontSize:'15px',
        marginRight:'5px'
    },
    typo:{
        color:'#FFF',
        fontSize:'15px',
        marginRight:'30px',
        '&:last-child':{
            marginRight:'0px'
        }
    }
}));
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