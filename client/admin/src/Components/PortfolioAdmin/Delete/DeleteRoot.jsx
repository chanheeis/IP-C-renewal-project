import React,{useState,useRef,useMemo,useEffect} from 'react';
import Slider from 'react-slick';
import dummyData from './dummyData';

import useStyles from '../Styles/Delete.DeleteRoot';

import PortfolioWrapper from './PortfolioWrapper';

const DeleteRoot = () => {
    const classes=useStyles();

    const sliderEl=useRef(null);
    const [crtBtn,setCrtBtn]=useState(0);
    const [dataList,setData]=useState(dummyData);
    const _deleteData=(id)=>{
        setData(dataList.filter(data=>{
            return data.id!==id;
        }));
    };
    const sliderOpt={
        dots:false,
        infinite:true,
        arrows:false,
        slidesToShow:3,
        slidesToScroll:3,
        beforeChange:(current,next)=>{
            setCrtBtn(next);       
        }
    }
    const portfolios=useMemo(()=>{
        if(dataList.length>0){
            return dataList.map((data,index)=>{
                return(
                    <div key={index}>
                        <PortfolioWrapper
                            _deleteData={_deleteData}
                            data={data}
                            key={index}
                        />
                    </div>
                )
            })
        }else{
            return ''
        }
    },[dataList,_deleteData])
    useEffect(()=>{
        console.log(crtBtn)
    },[crtBtn])
    const sliderBtns=useMemo(()=>{
        const btnList=[];
        const btnLength=Math.ceil(dataList.length/3);
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
    },[dataList,crtBtn,sliderEl])

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                Portfolio Delete Page
            </h1>
            <div className={classes.wrapper}>
                <Slider
                    ref={sliderEl} 
                    {...sliderOpt}>
                    {portfolios}
                </Slider>
            </div>
            <ul className={classes.btn_wrapper}>
                {sliderBtns}
            </ul>
        </div>
    );
};

export default DeleteRoot;