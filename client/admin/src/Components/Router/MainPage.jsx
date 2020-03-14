import React,{useContext,useState} from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';
import AuthContext from '../../Context/AuthContext';
import PortfolioMainPage from './PortfolioMainPage';
import SocialPage from './SocialPage';
import PartnershipMainPage from './PartnershipMainPage';

const useStyles=makeStyles(theme=>({
    root:{

    },
    btn_wrapper:{

    }
}));

const router={
    portfolio:<PortfolioMainPage/>,
    social:<SocialPage/>,
    partnership:<PartnershipMainPage/>
};

const MainPage = () => {
    const classes=useStyles();
    const {setIsLogin}=useContext(AuthContext);
    const [crtPage,setCrtPage]=useState('portfolio');

    return (
        <div>
            <div>
                <Button
                    onClick={()=>{
                        setCrtPage('portfolio')
                    }}
                >
                    Portfolio
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
                        setCrtPage('partnership')
                    }}
                >
                    Partnership
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