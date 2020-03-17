import React,{useState} from 'react';

import Button from '@material-ui/core/Button';
import useStyles from './MainPageStyle';

import ResistRoot from '../SocialAdmin/Resist/ResistRoot';

const router={
    resist:<ResistRoot/>
};

const SocialPage = () => {
    const classes=useStyles()
    const [crtPage,setCrtPage]=useState('resist');
    return (
        <div>
            <h1 className={classes.title}>
                Social Admin Page
            </h1>
            <div className={classes.btn_wrapper}>
                <Button
                    className={classes.btn}
                    onClick={()=>setCrtPage('resist')}>
                    Resist
                </Button>
            </div>
            {router[crtPage]}
        </div>
    );
};

export default SocialPage;