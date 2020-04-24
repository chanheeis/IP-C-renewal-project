import React,{useEffect,useState} from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from '../Styles/Modify.Image';
import classNames from 'classnames';

const Image = ({id,image_url,title,subtitle,date,modifying,_setDataList}) => {
    const classes=useStyles();
    const [titleSize,setTitleSize]=useState(0);
    const [subtitleSize,setSubtitleSize]=useState(0);
    
    const _handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        _setDataList(id,name,value);
        if(name==='title'){
            setTitleSize(value.length);
        }
        if(name==='subtitle'){
            setSubtitleSize(value.length);
        }
    }

    const titleComp=()=>{
        if(Boolean(modifying)){
            return (
                <div style={{display:'flex',flexFlow:'column nowrap',alignItems:'center'}}>
                    <Typography className={classes.length_typo}>
                        {titleSize}/20
                    </Typography>
                    <input 
                        className={classNames(
                            classes.textFiled_common,
                            classes.textFiled_1
                        )}
                        type="text"
                        value={title}
                        name="title"
                        autoComplete="off"
                        maxLength={20}
                        onChange={_handleChange}
                    />
                </div>
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
                <div style={{display:'flex',flexFlow:'column nowrap',alignItems:'center'}}>
                    <Typography className={classes.length_typo}>
                        {subtitleSize}/150
                    </Typography>
                    <textarea
                        className={classNames(
                            classes.textFiled_common,
                            classes.textFiled_2
                        )}
                        value={subtitle} 
                        name="subtitle"
                        autoComplete="off"
                        maxLength={150}
                        onChange={_handleChange}
                    />
                </div>
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
                    value={date}
                    type="text"
                    name="date"
                    autoComplete="off"
                    onChange={_handleChange}
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
                src={image_url}
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