import React,{useState,useContext} from 'react';
import AuthContext from '../../Context/AuthContext';

import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import useStyles from './Styles/Login';

const dummyAuth={
    id:'chanheeis',
    password:'1318dkfk12!@'
}

const Login = () => {
    const classes=useStyles();
    const {setIsLogin}=useContext(AuthContext);
    const [loginInfo,setLoginInfo]=useState({});
    const _setLoginInfo=(name,value)=>{
        setLoginInfo(prev=>{
            return {...prev,[name]:value}
        })
    }
    
    const _loginCheck=()=>{
        if(
            dummyAuth['id']===loginInfo['id']&&
            dummyAuth['password']===loginInfo['password']
        ){
            setIsLogin(true);
        }else{
            alert('로그인 실패')
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.login_wrapper}>
                <Typography className={classes.title}>
                    Login
                </Typography>
                <TextField
                    className={classes.input}
                    label="Account"
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <AccountCircleIcon/>
                            </InputAdornment>
                        )
                    }}
                    onChange={(e)=>{
                        _setLoginInfo('id',e.currentTarget.value)
                    }}
                />
                <TextField
                    className={classes.input}
                    label="Password"
                    type="password"
                    InputProps={{
                        startAdornment:(
                            <InputAdornment position="start">
                                <VpnKeyIcon/>
                            </InputAdornment>
                        )
                    }}
                    onChange={(e)=>{
                        _setLoginInfo('password',e.currentTarget.value)
                    }}
                />
                <Button
                    className={classes.btn}
                    onClick={_loginCheck}>
                    Login
                </Button>
            </div>
        </div>
    );
};

export default Login;