import React,{useState,useEffect} from 'react';
import Button from '@material-ui/core/Button'
import useStyles from './MainPageStyle';
const PartnershipMainPage = () => {
    const classes=useStyles();
    const [crtPage,setCrtPage]=useState('resist');
    useEffect(()=>{
        console.log(crtPage);
    },[crtPage])
    return (
        <div>
            <h1 className={classes.title}>
                Partnership Admin Page
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
        </div>
    );
};

export default PartnershipMainPage;