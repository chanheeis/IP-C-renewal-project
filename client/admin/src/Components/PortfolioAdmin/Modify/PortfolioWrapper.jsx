import React,{useState} from 'react';

import CreateIcon from '@material-ui/icons/Create';

import Account from './Account';
import Image from './Image';
import Link from './Link';

import useStyles from '../Styles/Modify.PortfolioWrapper';

const PortfolioWrapper = ({data,_setModifyId,modifyId}) => {
    const classes=useStyles();
    const {userName,modifiedDate,url,title,subtitle,date,id}=data;

    return (
        <div className={classes.root}>
            <CreateIcon
                className={classes.modify_icon}
                onClick={()=>{
                    const temp=Boolean(modifyId===id)?null:id;
                    _setModifyId(temp);
                }}            
            />
            <Account
                userName={userName}
                modifiedDate={modifiedDate}
            />
            <Image
                modifying={Boolean(modifyId===id)}
                id={id}
                url={url}
                title={title}
                subtitle={subtitle}
                date={date}
            />
            <Link
                modifying={Boolean(modifyId===id)}
            />
        </div>
    );
};

export default PortfolioWrapper;