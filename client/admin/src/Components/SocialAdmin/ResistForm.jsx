import React,{
    useState,
    useCallback,
    useMemo
} from 'react';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';
import useStyles from './Styles/ResistForm';

const ResistForm = ({channel,url,_updateSocialInfo}) => {
    const classes=useStyles();
    const [modifying,setModifying]=useState(false);
    const _handleClick=useCallback(()=>{
        if(modifying){
            const body={channel,url};
            fetch('/social/resist',{
                method:'POST',
                body:JSON.stringify(body),
                headers:{
                    'Content-type':'application/json',
                    'Accept':'application/json'
                }
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.response==='DB_QUERY_SUCCESS'){
                    alert('Social info update success');
                }
            })          
        }
        setModifying(prev=>{return !prev});
    },[channel,url,modifying]);

    const _handleChange=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        _updateSocialInfo(name,value);
    }
    
    const btnLabel=useMemo(()=>{
        if(Boolean(url)){
            return Boolean(modifying)?'OK':'Modify'
        }else{
            return Boolean(modifying)?'OK':'Resist'
        }
    },[modifying,url]);

    return (
        <div className={classes.root}>
            <img
                className={classes.icon} 
                src={`/static/image/${channel}.png`}/>
            <input
                className={classes.textField}
                name={channel}
                type="text"
                value={url}
                disabled={!modifying}
                onChange={_handleChange}
            />
            <Button
                className={classNames(
                    classes.btn,
                    !Boolean(url)?classes.btn_null:'',
                    Boolean(modifying)?classes.btn_modifying:''
                )}
                onClick={_handleClick}>
                {btnLabel}
            </Button>
        </div>
    );
};

export default ResistForm;