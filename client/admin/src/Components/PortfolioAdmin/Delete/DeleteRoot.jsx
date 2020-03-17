import React,{
    useState,
    useRef,
    useMemo,
    useCallback,
    useEffect
} from 'react';
import Slider from 'react-slick';
import dummyData from './dummyData';

import useStyles from '../Styles/Delete.DeleteRoot';

import PortfolioWrapper from './PortfolioWrapper';

const DeleteRoot = () => {
    const classes=useStyles();

    //Refs
    const sliderEl=useRef(null);

    //States
    const [crtBtn,setCrtBtn]=useState(0);
    const [dataList,setDataList]=useState(null);
    
    //Callbacks
    const _deleteData=useCallback((id)=>{
        setDataList(dataList.filter(data=>{
            return data.id!==id;
        }))
    },[dataList])

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
    },[dataList,_deleteData]);

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
        setDataList(dummyData)
    },[])
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