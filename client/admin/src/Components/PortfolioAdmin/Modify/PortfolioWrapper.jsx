import React,{useState,useEffect,useMemo,useCallback} from 'react';
import classNames from 'classnames';

import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';

import Account from './Account';
import Image from './Image';

import useStyles from '../Styles/Modify.PortfolioWrapper';

const PortfolioWrapper = ({data,modifyId,_setModifyId,_setDataList}) => {
    const classes=useStyles();
    //Props
    const {admin_id,modified_date,image_url,title,subtitle,date,id}=data;

    //States
    const [modifying,setModifying]=useState(Boolean(modifyId===id));

    //Callbacks
    const _updatePortfolio=()=>{
        if(modifyId===data.id){
            const url='/portfolio/modify';
            fetch(url,{
                method:'POST',
                body:JSON.stringify(data),
                headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                //DB Query error 처리 필요
            });
        }
    }
    
    const icon=useMemo(()=>{
        if(Boolean(modifying)&&Boolean(modifyId===id)){
            return(
                <CheckIcon
                    className={classNames(
                        classes.icon,
                        classes.done_icon
                    )}
                    onClick={()=>{
                        _setModifyId(null);
                        setModifying(prev=>!prev);
                        _updatePortfolio();
                    }}
                />
            )
        }else{
            return( 
                <CreateIcon
                    className={classNames(
                        classes.icon,
                        classes.modify_icon
                    )}
                    onClick={()=>{
                        _setModifyId(id);
                        setModifying(prev=>!prev);
                    }}            
                />
            )
        }
    },[modifying,modifyId,id,classes,_setModifyId]);

    //Effects
    useEffect(()=>{
        if(id!==modifyId){
            setModifying(false);
        }
    },[modifyId,id])
    
    return (
        <div className={classes.root}>
            {icon}
            <Account
                admin_id={admin_id}
                modified_date={modified_date}
            />
            <Image
                _setDataList={_setDataList}
                modifying={Boolean(modifyId===id)}
                id={id}
                image_url={image_url}
                title={title}
                subtitle={subtitle}
                date={date}
            />
        </div>
    );
};

export default PortfolioWrapper;