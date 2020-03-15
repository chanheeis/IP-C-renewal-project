import React,{useState,useCallback} from 'react';
import classNames from 'classnames';

//Material components and methods
import Typography from '@material-ui/core/Typography';
import useStyles from '../Styles/Resist.TitleWrapper';

const TitleWrapper = ({_setResistData}) => {
    const classes=useStyles();

    const [titleSize,setTitleSize]=useState(0);
    const [subtitleSize,setSubtitleSize]=useState(0);

    //Callbacks
    const _getInputValue=useCallback((e)=>{
        const name=e.target.name;
        const value=e.target.value;
        _setResistData(name,value);
        if(name==='title'){
            setTitleSize(value.length);
        }
        if(name==='subtitle'){
            setSubtitleSize(value.length);
        }
    },[_setResistData]);

    return (
        <div className={classes.title_wrapper}>
            <Typography className={classes.typo}>
                {titleSize}/20
            </Typography>
            <input
                className={classNames(
                    classes.textFiled_common,
                    classes.textFiled_1
                )} 
                onChange={_getInputValue}
                placeholder="Title을 입력하세요"
                type="text"
                name="title"
                autoComplete="off"
                maxLength={20}
            />
            <span className={classes.separator}/>
            <Typography className={classes.typo}>
                {subtitleSize}/150
            </Typography>
            <textarea
                className={classNames(
                    classes.textFiled_common,
                    classes.textFiled_2
                )}
                onChange={_getInputValue}
                placeholder="Subtitle을 입력하세요" 
                name="subtitle"
                autoComplete="off"
                maxLength={150}
            />
            <input
                className={classNames(
                    classes.textFiled_common,
                    classes.textFiled_3
                )}
                onChange={_getInputValue} 
                placeholder="날짜를 입력하세요"
                type="text"
                name="date"
                autoComplete="off"
            />            
        </div>
    );
};

export default TitleWrapper;