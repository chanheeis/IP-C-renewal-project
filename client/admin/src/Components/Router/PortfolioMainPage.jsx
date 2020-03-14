import React,{useState} from 'react';

import Button from '@material-ui/core/Button';
import ResistRoot from '../PortfolioAdmin/Resist/ResistRoot';
import DeleteRoot from '../PortfolioAdmin/Delete/DeleteRoot';
import ModifyRoot from '../PortfolioAdmin/Modify/ModifyRoot';
import useStyles from './MainPageStyle';

const router={
    resist:<ResistRoot/>,
    modify:<ModifyRoot/>,
    delete:<DeleteRoot/>
};

const ProtfolioMainPage = () => {
    const classes=useStyles();
    const [crtPage,setCrtPage]=useState('resist');
    return (
        <div>
            <h1 className={classes.title}>
                Protfolio Admin Page
            </h1>
            <div className={classes.btn_wrapper}>
                <Button
                    className={classes.btn}
                    onClick={()=>setCrtPage('resist')}>
                    Resist
                </Button>
                <Button
                    className={classes.btn}
                    onClick={()=>setCrtPage('modify')}>
                    Modify
                </Button>
                <Button
                    className={classes.btn}
                    onClick={()=>setCrtPage('delete')}>
                    Delete
                </Button>
            </div>
            {router[crtPage]}
        </div>
    );
};

export default ProtfolioMainPage;