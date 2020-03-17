import React,{
    useState,
    useCallback,
    useMemo
} from 'react';
import classNames from 'classnames';

import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        display:'flex',
        flexFlow:'row nowrap',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'10px',
        marginBottom:'10px'
    },
    icon:{
        width:'50px',
        height:'50px'
    },
    textField:{
        width:'70%',
        height:'40px',
        marginLeft:'10px',
        marginRight:'10px',
        paddingLeft:'20px',
        fontSize:'15px',
        borderRadius:'5px',
        border:'none',
        '&:focus':{
            outline:'none'
        }
    },
    btn:{
        background:theme.palette.secondary.main,
        width:'80px',
        height:'40px',
        color:'#FFF',
    },
    btn_null:{
        background:theme.palette.accent.light
    },
    btn_modifying:{
        background:'#06A66C',
        '&:hover':{
            background:theme.palette.accent.light
        }
    }
}))

const ResistForm = ({logo,link,_setData}) => {
    const classes=useStyles();

    const [modifying,setModifying]=useState(false)
    
    const _handleClick=useCallback(()=>{
        setModifying(prev=>{return !prev});
    },[]);

    const _handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        _setData(name,value);
    }
    
    const btnLabel=useMemo(()=>{
        if(Boolean(link)){
            return Boolean(modifying)?'OK':'Modify'
        }else{
            return Boolean(modifying)?'OK':'Resist'
        }
    },[modifying,link]);

    return (
        <div className={classes.root}>
            <img
                className={classes.icon} 
                src={`/static/image/${logo}.png`}/>
            <input
                className={classes.textField} 
                name={logo}
                type="text"
                value={Boolean(link)?link:''}
                disabled={!modifying}
                onChange={_handleChange}
            />
            <Button
                className={classNames(
                    classes.btn,
                    !Boolean(link)?classes.btn_null:'',
                    Boolean(modifying)?classes.btn_modifying:''
                )}
                onClick={_handleClick}>
                {btnLabel}
            </Button>
        </div>
    );
};

export default ResistForm;