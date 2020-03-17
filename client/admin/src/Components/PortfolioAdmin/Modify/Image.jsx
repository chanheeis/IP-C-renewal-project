import React,{useEffect,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from '../Styles/Modify.Image';
import classNames from 'classnames';

const Image = ({url,title,subtitle,date,modifying}) => {
    const classes=useStyles();
    const [titleSize,setTitleSize]=useState(0);
    const [subtitleSize,setSubtitleSize]=useState(0);
    
    const titleComp=()=>{
        if(Boolean(modifying)){
            return (
                <input 
                    className={classNames(
                        classes.textFiled_common,
                        classes.textFiled_1
                    )}
                    type="text"
                    placeholder={title}
                    name="title"
                    autoComplete="off"
                    maxLength={20}
                />
            )
        }else{
            return (
                <Typography className={classNames(
                    classes.typo_common,
                    classes.typo_1
                )}>
                    {title}    
                </Typography>
            )            
        }
    }
    const subTitleComp=()=>{
        if(Boolean(modifying)){
            return (
                <textarea
                    className={classNames(
                        classes.textFiled_common,
                        classes.textFiled_2
                    )}
                    placeholder={subtitle} 
                    name="subtitle"
                    autoComplete="off"
                    maxLength={150}
                />
            )
        }else{
            return (
                <Typography className={classNames(
                    classes.typo_common,
                    classes.typo_2
                )}>
                    {subtitle}
                </Typography>
            )
        }
    }
    const dateComp=()=>{
        if(Boolean(modifying)){
            return(
                <input
                    className={classNames(
                        classes.textFiled_common,
                        classes.textFiled_3
                    )} 
                    placeholder={date}
                    type="text"
                    name="date"
                    autoComplete="off"
                />
            )
        }else{
            return(
                <Typography className={classNames(
                    classes.typo_common,
                    classes.typo_3
                )}>
                    {date}
                </Typography>
            )
        }
    }

    return (
        <div className={classes.root}>
            <img
                className={classes.img}
                alt={title}
                src={url}
            />
            <div className={classes.title_wrapper}>
                {titleComp()}
                <span className={classes.separator}/>
                {subTitleComp()}
                {dateComp()}

                <Typography className={classes.name_typo}>
                    image_1.jpg
                </Typography>            
            </div>            
        </div>
    );
};

export default Image;