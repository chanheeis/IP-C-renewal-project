import React from 'react';
import {CircularProgress} from '@material-ui/core';
import useStyles from '../Styles/Resist.LoadingPage';

const LoadingPage = () => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <CircularProgress/>
        </div>
    );
};

export default LoadingPage;