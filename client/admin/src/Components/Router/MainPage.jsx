import React,{useContext,useState} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AuthContext from '../../Context/AuthContext';
import BannerPage from './BannerPage';
import SocialPage from './SocialPage';
import PortfolioPage from './PortfolioPage';

const useStyles=makeStyles(theme=>({
    root:{

    },
    btn_wrapper:{

    }
}));

const router={
    banner:<BannerPage/>,
    social:<SocialPage/>,
    portfolio:<PortfolioPage/>
};

const MainPage = () => {
    const classes=useStyles();
    const {setIsLogin}=useContext(AuthContext);
    const [crtPage,setCrtPage]=useState('banner');

    return (
        <div>
            <div>
                <Button
                    onClick={()=>{
                        setCrtPage('banner')
                    }}
                >
                    Banner
                </Button>
                <Button
                    onClick={()=>{
                        setCrtPage('social')
                    }}
                >
                    Social
                </Button>
                <Button
                    onClick={()=>{
                        setCrtPage('portfolio')
                    }}
                >
                    Portfolio
                </Button>
                <Button
                    onClick={()=>{
                        setIsLogin(false);
                    }}
                >
                    Logout
                </Button>
            </div>
            {router[crtPage]}
        </div>
    );
};

export default MainPage;