import React,{useState,useEffect} from 'react';
import useStyles from '../Styles/Modify.ModifyRoot';
import dummyData from './dummyData';

const ModifyRoot = () => {
    const classes=useStyles();  
    const [data,setData]=useState(dummyData);
    useEffect(()=>{
        console.log(data);
    },[])  
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                Portfolio Modify Page
            </h1>
        </div>
    );
};

export default ModifyRoot;