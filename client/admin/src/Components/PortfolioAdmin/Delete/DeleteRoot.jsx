import React,{useState,useEffect} from 'react';
import useStyles from '../Styles/Delete.DeleteRoot';
import dummyData from './dummyData';
import PortfolioWrapper from './PortfolioWrapper';

const DeleteRoot = () => {
    const classes=useStyles();
    const [dataList,setData]=useState(dummyData);
    
    const _deleteData=(id)=>{
        setData(dataList.filter(data=>{
            return data.id!==id;
        }));
    };

    return (
        <div className={classes.root}>
            <h1 className={classes.title}>
                Portfolio Delete Page
            </h1>
            <div className={classes.wrapper}>
                {
                    dataList.map((data,index)=>{
                        return(
                            <PortfolioWrapper
                                _deleteData={_deleteData}
                                data={data}
                                key={index}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default DeleteRoot;