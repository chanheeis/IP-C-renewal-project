import React,{useState,useEffect} from 'react';
//Material Components and methods
import AccountInfo from './AccountInfo';
import useStyles from '../Styles/Resist.ResistRoot';

//Imported React Components
import ImageUpload from './ImageUpload';
import LinkUpload from './LinkUpload';

const ResistRoot = () => {
    const classes=useStyles();
    const [resistData,setResistData]=useState({});
    
    const _setResistData=(name,value)=>{
        setResistData(prev=>{
            return {...prev,[name]:value};
        })
    };

    useEffect(()=>{
        return()=>{
            setResistData({});
        }
    },[]);

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                Portfolio Resist Section
            </h1>
            <AccountInfo
                userName="chanheeis"
            />
            <ImageUpload
                _setResistData={_setResistData}
            />
            <LinkUpload
                _setResistData={_setResistData}
            />
        </div>
    );
};

export default ResistRoot;