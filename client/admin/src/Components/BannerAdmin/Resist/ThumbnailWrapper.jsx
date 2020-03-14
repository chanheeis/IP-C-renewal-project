import React from 'react';

//Material Components and methods
import {makeStyles} from '@material-ui/core/styles';

//Imported React Components
import Thumbnail from './Thumbnail';

const useStyles=makeStyles(theme=>({
    thumbnail_wrapper:{
        width:'max-content',
        display:'flex',
        flexFlow:'row nowrap',
        margin:'30px 0px',
    }
}))

const ThumbnailWrapper = ({thumbnails,_deleteThumbnail}) => {
    const classes=useStyles();
    
    const thumbnailComps=()=>{
        if(Boolean(thumbnails)){
            return thumbnails.map((thumbnail,index)=>{
                return (
                    <Thumbnail
                        key={index}
                        url={thumbnail.url}
                        name={thumbnail.name}
                        _deleteThumbnail={_deleteThumbnail}   
                    />
                )
            })
        }
    }
        
    return (
        <div className={classes.thumbnail_wrapper}>
            {thumbnailComps()}
        </div>
    );
};

export default ThumbnailWrapper;