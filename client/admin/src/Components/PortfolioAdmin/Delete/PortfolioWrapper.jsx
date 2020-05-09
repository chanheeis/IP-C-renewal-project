import React from 'react';

import Account from './Account';
import Image from './Image';
import Link from './Link';
import useStyles from '../Styles/Delete.PortfolioWrapper';

const PortfolioWrapper = ({data,_deleteData}) => {
    const classes=useStyles();
    const {
        admin_id,modified_date,
        id,date,image_url,title,subtitle
    }=data;
    return (
        <div className={classes.root}>
            <Account
                userName={admin_id}
                modifiedDate={modified_date}
            />
            <Image
                _deleteData={_deleteData}
                id={id}
                url={image_url}
                title={title}
                subtitle={subtitle}
                date={date}
            />
            <Link/>
        </div>
    );
};

export default PortfolioWrapper;