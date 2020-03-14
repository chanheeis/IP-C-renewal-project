import React from 'react';
import classNames from 'classnames';

import Typography from '@material-ui/core/Typography';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import useStyles from '../Styles/Delete.Image';

const Image = ({url,title,subtitle,date,id,_deleteData}) => {
    const classes=useStyles();
    return (
        <div className={classes.root}>
            <DeleteForeverIcon
                className={classes.delete_icon}
                onClick={()=>_deleteData(id)}
            />
            <img
                className={classes.img}
                alt='picture'
                src={url}
            />
            <div className={classes.title_wrapper}>
                <Typography className={classNames(
                    classes.typo_common,
                    classes.typo_1
                )}>
                    {title}    
                </Typography>

                <span className={classes.separator}/>

                <Typography className={classNames(
                    classes.typo_common,
                    classes.typo_2
                )}>
                    {subtitle}
                </Typography>

                <Typography className={classNames(
                    classes.typo_common,
                    classes.typo_3
                )}>
                    {date}
                </Typography>
                <Typography className={classes.name_typo}>
                    image_1.jpg
                </Typography>            
            </div>
        </div>
    );
};

export default Image;