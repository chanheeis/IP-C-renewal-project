import React,{useState,useEffect,useMemo,useCallback} from 'react';
import useStyles from './Styles/ResistRoot';
import ResistForm from './ResistForm';

const ResistRoot = () => {
    const classes=useStyles();
    const [socialInfoList,setSocialInfoList]=useState([]);
    
    const _updateSocialInfo=useCallback((channel,url)=>{
        let updatedArr=[...socialInfoList];
        for(let i = 0;i<updatedArr.length;i++) {
            if(updatedArr[i].channel===channel) {
                updatedArr[i].url=url;
                break;
            }
        }
        setSocialInfoList(updatedArr);
    },[setSocialInfoList,socialInfoList]);

    const resistForm=useMemo(()=>{
        if(socialInfoList.length>0){
            return socialInfoList.map((socialInfo,index)=>{
                return (
                    <ResistForm 
                        key={index}
                        channel={socialInfo.channel}
                        url={socialInfo.url}
                        _updateSocialInfo={_updateSocialInfo}
                    />
                )
            })
        }else{
            return <p>Loading...</p>
        }
    },[socialInfoList,_updateSocialInfo])
    
    useEffect(()=>{
        fetch('/social/resist')
        .then(res=>res.json())
        .then(res=>{
            if(res.response==='DB_QUERY_SUCCESS'){
                setSocialInfoList(res.data);
            }else{
                alert('Error occured during fetch [Social info]');
            }
        });
    },[]);
    
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                Social Resist Page
            </h1>
            <div className={classes.wrapper}>
                {resistForm}
            </div>
        </div>
    );
};

export default ResistRoot;