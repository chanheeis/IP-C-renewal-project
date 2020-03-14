import React from 'react';
import ResistRoot from '../BannerAdmin/Resist/ResistRoot';
import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    title:{
        color:theme.palette.primary.main,
        paddingLeft:'5px',
        borderLeft:`10px solid ${theme.palette.primary.main}`
    }
}))
const ProtfolioMainPage = () => {
    const classes=useStyles();
    return (
        <div>
            <h1 className={classes.title}>
                Protfolio Admin Page
            </h1>
            <ResistRoot/>
        </div>
    );
};

export default ProtfolioMainPage;