import React from 'react';

//Material Components and methods
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';
import Fade from '@material-ui/core/Fade'

import useStyles from '../Styles/Resist.Thumbnail';

//Imported React Components
import TitleWrapper from './TitleWrapper';

const Thumbnail = ({
    isFade,
    thumbnail,
    _deleteThumbnail,
    _setResistData}) => {

    const classes=useStyles();
    return (
        <Fade
            in={isFade}
            timeout={1000}>
            <div className={classes.root}>
                <CancelIcon
                    onClick={()=>_deleteThumbnail()}
                    className={classes.cancel_icon}/>
                <Typography className={classes.thumbnail_typo}>
                    {thumbnail.name}
                </Typography>
                <div className={classes.img_wrapper}>
                    <img
                        className={classes.thumbnail}
                        alt={thumbnail.name}
                        src={thumbnail.url}
                    />
                </div>
                <TitleWrapper
                    _setResistData={_setResistData}
                />            
            </div>
        </Fade>
    );
};

export default Thumbnail;