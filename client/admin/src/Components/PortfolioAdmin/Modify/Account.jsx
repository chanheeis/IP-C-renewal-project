import React from 'react';
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
}))

const Account = ({admin_id,modified_date}) => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <AccountCircleIcon className={classes.icon}/>
            <Typography className={classes.typo}>
                {admin_id}
            </Typography>
            <Typography className={classes.typo}>
                {modified_date}
            </Typography>
        </div>
    );
};

export default Account;