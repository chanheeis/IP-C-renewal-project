import React,{useState,useEffect} from 'react';
import dummyData from './dummyData';

import {makeStyles} from '@material-ui/core/styles';
import ResistForm from './ResistForm';

const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        height:'auto',
        paddingBottom:'50px',
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center',
        background:theme.palette.primary.main
    },
    title:{
        color:'#FFF',
        paddingLeft:'10px',
        borderLeft:`5px solid #FFF`,
        marginLeft:'20px',
        alignSelf:'flex-start',
        fontSize:'20px'
    },
    wrapper:{
        width:'700px',
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center'
    }
}))

const ResistRoot = () => {
    const classes=useStyles();
    const [data,setData]=useState(null);
    
    const _setData=(name,value)=>{
        setData(prev=>{
            return {...prev,[name]:value}
        })
    };

    const _getLink=(channel)=>{
        if(Boolean(data)&&data.hasOwnProperty(channel)){
            return data[channel];
        }else{
            return null
        }
    }

    useEffect(()=>{
        setData(dummyData);
    },[]);

    useEffect(()=>{
        console.log(data);
    },[data]);

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                Social Resist Page
            </h1>
            <div className={classes.wrapper}>
                <ResistForm 
                    logo="naver"
                    link={_getLink('naver')}
                    _setData={_setData}/>
                <ResistForm 
                    logo="youtube"
                    link={_getLink('youtube')}
                    _setData={_setData}/>
                <ResistForm 
                    logo="facebook"
                    link={_getLink('facebook')}
                    _setData={_setData}/>
                <ResistForm 
                    logo="instagram"
                    link={_getLink('instagram')}
                    _setData={_setData}/>
            </div>
        </div>
    );
};

export default ResistRoot;