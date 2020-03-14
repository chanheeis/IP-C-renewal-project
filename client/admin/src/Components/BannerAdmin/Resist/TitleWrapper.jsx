import React,{useState,useEffect,useCallback,useRef} from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles=makeStyles(theme=>({
    title_wrapper:{
        position:'absolute',
        top:'0px',
        left:'0px',
        background:'rgb(0,0,0,0.8)',
        width:'100%',
        height:'100%',
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent:'center',
        alignItems:'center'
    },
    typo_1:{
        fontFamily:"'Noto Sans KR', sans-serif",
        textAlign:'center',
        fontSize:'24px',
        background:'none',
        color:'#FFF',
        border:'none',
        '&:focus':{
            outline:'none'
        },
        '&::placeholder':{
            color:'#a6a6a6'
        }
    },
    typo_2:{
        resize:'none',
        width:'250px',
        height:'150px',
        fontFamily:"'Noto Sans KR', sans-serif",
        textAlign:'center',
        fontSize:'16px',
        background:'none',
        color:'#FFF',
        border:'none',
        '&:focus':{
            outline:'none'
        },
        '&::placeholder':{
            color:'#a6a6a6'
        }
    },
    typo_3:{
        width:'250px',
        fontFamily:"'Noto Sans KR', sans-serif",
        textAlign:'center',
        fontSize:'12px',
        background:'none',
        color:'#FFF',
        border:'none',
        position:'absolute',
        bottom:'50px',
        '&:focus':{
            outline:'none'
        },
        '&::placeholder':{
            color:'#a6a6a6'
        }
    },
    separator:{
        content:'',
        width:'200px',
        borderBottom:'1.5px solid #FFF',
        marginTop:'15px',
        marginBottom:'15px'
    }
}))

const TitleWrapper = ({isFade}) => {
    const classes=useStyles();
    //States
    const [inputValue,setInputValue]=useState({})

    //Callbacks
    const _getInputValue=useCallback((e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setInputValue(prev=>{
            return {...prev,[name]:value}
        })
    },[setInputValue]);

    //Effects
    return (
        <div className={classes.title_wrapper}>
            <input
                className={classes.typo_1} 
                onChange={_getInputValue}
                placeholder="Title을 입력하세요"
                type="text"
                name="title"
                autoComplete="off"
            />
            <span className={classes.separator}/>
            <textarea
                className={classes.typo_2}
                onChange={_getInputValue}
                placeholder="Subtitle을 입력하세요" 
                name="subtitle"
                autoComplete="off"
            />
            <input
                className={classes.typo_3}
                onChange={_getInputValue} 
                placeholder="날짜를 입력하세요"
                type="text"
                name="date"
                autoComplete="off"
            />            
        </div>
    );
};

export default TitleWrapper;