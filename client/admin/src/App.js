import React,{useState,useMemo} from 'react';
import AuthContext from './Context/AuthContext';

import Login from './Components/Auth/Login';
import MainPage from './Components/Router/MainPage';

import {MuiThemeProvider} from '@material-ui/core/styles';
import theme from './Styles/mainTheme';

const App = () => {
    const [isLogin,setIsLogin]=useState(false);
    const _routing=useMemo(()=>{
        const currentComp=Boolean(isLogin)?<MainPage/>:<Login/>
        return currentComp;
    },[isLogin])

    return (
        <AuthContext.Provider value={{isLogin,setIsLogin}}>    
            <MuiThemeProvider theme={theme}>
                <div>
                    {_routing}
                </div>
            </MuiThemeProvider>
        </AuthContext.Provider>
    );
};

export default App;