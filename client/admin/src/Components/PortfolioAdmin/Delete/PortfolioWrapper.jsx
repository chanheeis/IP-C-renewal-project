import React from 'react';

import Account from './Account';
import Image from './Image';
import Link from './Link';
import useStyles from '../Styles/Delete.PortfolioWrapper';

const PortfolioWrapper = ({data,_deleteData}) => {
    const classes=useStyles();
    
    const {userName,modifiedDate,url,title,subtitle,date,id}=data;
    return (
        <div className={classes.root}>
            <Account
                userName={userName}
                modifiedDate={modifiedDate}
            />
            <Image
                _deleteData={_deleteData}
                id={id}
                url={url}
                title={title}
                subtitle={subtitle}
                date={date}
            />
            <Link/>
        </div>
    );
};

export default PortfolioWrapper;