import React from 'react';
//Material Components and methods
import {makeStyles} from '@material-ui/core/styles';
import AccountInfo from './AccountInfo';

//Imported React Components
import ImageUpload from './ImageUpload';
import LinkUpload from './LinkUpload';

const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100vh',
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center',
        background:theme.palette.primary.main
    },
    title:{
        color:'#FFF',
        paddingLeft:'10px',
        borderLeft:'10px solid #FFF',
        alignSelf:'flex-start',
        marginLeft:'20px'
    }
}))
const ResistRoot = () => {
    const classes=useStyles();

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                Portfolio Resist Section
            </h1>
            <AccountInfo
                userName="chanheeis"
            />
            <ImageUpload/>
            <LinkUpload/>
        </div>
    );
};

export default ResistRoot;