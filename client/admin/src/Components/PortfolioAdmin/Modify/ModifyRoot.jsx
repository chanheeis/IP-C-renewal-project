import React,{
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
} from 'react';
import Slider from 'react-slick';

import useStyles from '../Styles/Modify.ModifyRoot';
import PortfolioWrapper from '../Modify/PortfolioWrapper';

const ModifyRoot = () => {
    const classes=useStyles();  
    //Refs
    const sliderEl=useRef(null);

    //States
    const [dataList,setDataList]=useState(null);
    const [modifyId,setModifyId]=useState(null);
    const [crtBtn,setCrtBtn]=useState(0);
    
    //Callbacks
    const _setModifyId=useCallback((id)=>{
        setModifyId(id);
    },[]);

    const _setDataList=(id,name,value)=>{
        setDataList(dataList.map(data=>{
            if(id===data.id){
                return {...data,[name]:value};
            }else{
                return data;
            }
        }))
    }
    
    //Memos
    const sliderOpt=useMemo(()=>{
        return {
            dots:false,
            infinite:true,
            arrows:false,
            adaptiveHeight:true,
            slidesToShow:3,
            slidesToScroll:3,
            beforeChange:(current,next)=>{
                setCrtBtn(next);       
            }
        }
    },[]);

    const portfolios=useMemo(()=>{
        if(Boolean(dataList)){
            return dataList.map((data,index)=>{
                return(
                    <div key={index}>
                        <PortfolioWrapper
                            _setDataList={_setDataList}
                            _setModifyId={_setModifyId}
                            modifyId={modifyId}
                            modifying={Boolean(modifyId===data.id)}
                            data={data}
                            key={index}
                        />
                    </div>
                )
            })
        }else{
            return ''
        }
    },[dataList,modifyId,_setModifyId]);

    const sliderBtns=useMemo(()=>{
        const btnList=[];
        const btnLength=Boolean(dataList)?Math.ceil(dataList.length/3):0;
        if(Boolean(sliderEl)){
            for(let i=0;i<btnLength;i++){
                btnList.push(
                    <li 
                        key={i}
                        onClick={()=>sliderEl.current.slickGoTo(i*3)}
                        className={i*3===crtBtn?classes.crtBtn:classes.btn}>
                        &#9679;
                    </li>
                )
            }
            return btnList.map(btn=>{
                return btn;
            })
        }
        return;
    },[dataList,crtBtn,sliderEl,classes])

    useEffect(()=>{
        const url='/portfolio/modify';
        fetch(url,{
            method:'GET',
            headers:{
                'Accept':'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>{
            if(Boolean(data)&&data!=='DB_QUERY_FAIL'){
                setDataList(data.response);
            }
        })
    },[])

    useEffect(()=>{
        console.log(dataList);
    },[dataList])
    
    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                Portfolio Modify Page
            </h1>
            <div className={classes.wrapper}>
                <Slider
                    ref={sliderEl}
                    {...sliderOpt}>
                    {portfolios}
                </Slider>
                <ul className={classes.btn_wrapper}>
                    {sliderBtns}
                </ul>
            </div>
        </div>
    );
};

export default ModifyRoot;