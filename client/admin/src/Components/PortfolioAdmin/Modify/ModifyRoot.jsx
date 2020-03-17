import React,{
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback
} from 'react';
import Slider from 'react-slick';
import dummyData from './dummyData';

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

    //Effects
    useEffect(()=>{
        //Set initial dataList
        if(!Boolean(dataList)){
            setDataList(dummyData)
        }
        console.log(dataList);
    },[dataList])

    useEffect(()=>{
        console.log(modifyId);
    },[modifyId])

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