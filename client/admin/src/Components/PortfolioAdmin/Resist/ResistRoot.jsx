import React,{useState,useEffect} from 'react';
//Material Components and methods
import Button from '@material-ui/core/Button';
import useStyles from '../Styles/Resist.ResistRoot';

//Imported React Components
import ImageUpload from './ImageUpload';
import AccountInfo from './AccountInfo';
import LoadingPage from './LoadingPage';
import LinkUpload from './LinkUpload';

const ResistRoot = () => {
    const classes=useStyles();
    const [resistData,setResistData]=useState({date:''});
    const [loading,setLoading]=useState(false);
    const [disable,setDisable]=useState(true);

    const _setResistData=(name,value)=>{
        setResistData(prev=>{
            return {...prev,[name]:value};
        })
    };

    const _submitResistData=(event)=>{
        event.preventDefault();
        setLoading(true);
        const formData=new FormData();
        for(var key in resistData){
            formData.append(key,resistData[key]);
        }
        const url='/portfolio/resist';
        fetch(url,{
            method:'POST',
            body:formData,
            headers:{
                'Accept':'application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            if(res.response==='DB_QUERY_FAIL'){
                alert('포트폴리오 등록에 실패했습니다.');
            }
            setLoading(false);
        });
    }
    useEffect(()=>{
        if(
            resistData.hasOwnProperty('title')&&
            resistData.hasOwnProperty('subtitle')&&
            resistData.hasOwnProperty('date')&&
            resistData.hasOwnProperty('image')
        ){
            for(var key in resistData){
                if(key==='image'){
                    if(!Boolean(resistData[key])){
                        setDisable(true);
                        return;
                    }
                }else{
                    if(!resistData[key].length>0){
                        setDisable(true);
                        return;
                    }
                }
            }
            setDisable(false);
        }else{
            setDisable(true);
            return;
        }
    },[resistData]);

    useEffect(()=>{
        return()=>{
            setResistData({});
        }
    },[]);

    return (
        <div 
            className={classes.root}>
            <h1 className={classes.title}>
                Portfolio Resist Section
            </h1>
            <AccountInfo
                userName="chanheeis"
            />
            {
                loading?
                <LoadingPage/>:            
                <ImageUpload
                    resistData={resistData}
                    _setResistData={_setResistData}
                />
            }
            <LinkUpload
                _setResistData={_setResistData}
            />
            <Button
                className={disable?classes.disable_btn:classes.submit_btn}
                disabled={disable}
                onClick={_submitResistData}>
                Submit
            </Button>
        </div>
    );
};

export default ResistRoot;