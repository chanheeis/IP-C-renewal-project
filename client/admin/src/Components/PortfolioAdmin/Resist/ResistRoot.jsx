import React,{useState,useEffect} from 'react';
//Material Components and methods
import Button from '@material-ui/core/Button';
import useStyles from '../Styles/Resist.ResistRoot';

//Imported React Components
import ImageUpload from './ImageUpload';
import LinkUpload from './LinkUpload';
import AccountInfo from './AccountInfo';

const ResistRoot = () => {
    const classes=useStyles();
    const [resistData,setResistData]=useState({date:''});
    
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
                resistData={resistData}
                _setResistData={_setResistData}
            />
            <LinkUpload
                _setResistData={_setResistData}
            />
            <Button
                onClick={()=>console.log(resistData)}
            >
                Submit
            </Button>
        </div>
    );
};

export default ResistRoot;