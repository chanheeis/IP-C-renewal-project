import React,{useState,useEffect,useMemo,useCallback} from 'react';
import classNames from 'classnames';

import CreateIcon from '@material-ui/icons/Create';
import CheckIcon from '@material-ui/icons/Check';

import Account from './Account';
import Image from './Image';

import useStyles from '../Styles/Modify.PortfolioWrapper';

const PortfolioWrapper = ({data,modifyId,_setModifyId,_setDataList,_loadPortfolioList}) => {
    const classes=useStyles();
    const {admin_id,modified_date,image_url,title,subtitle,date,id}=data;
    const [modifying,setModifying]=useState(Boolean(modifyId===id));
    
    const _updatePortfolio=useCallback(()=>{
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
            .then((data)=>{
                if(data.response!=='DB_QUERY_FAIL'){
                    // _loadPortfolioList();
                    alert('UPDATE SUCCESS!!');
                }
            });
        }
    },[modifyId,data])
    
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
    },[modifying,id,classes,modifyId,_setModifyId]);

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
                admin_id={admin_id}
                modified_date={modified_date}
                image_url={image_url}
                title={title}
                subtitle={subtitle}
                date={date}
            />
        </div>
    );
};

export default PortfolioWrapper;