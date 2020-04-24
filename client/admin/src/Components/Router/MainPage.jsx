import React,{useContext,useState} from 'react';
import Button from '@material-ui/core/Button';

import AuthContext from '../../Context/AuthContext';
import PortfolioMainPage from './PortfolioMainPage';
import SocialPage from './SocialPage';
import PartnershipMainPage from './PartnershipMainPage';

const router={
    portfolio:<PortfolioMainPage/>,
    social:<SocialPage/>,
    partnership:<PartnershipMainPage/>
};

const MainPage = () => {
    //Contexts
    const {setIsLogin}=useContext(AuthContext);
    
    //States
    const [crtPage,setCrtPage]=useState('portfolio');
    
    return (
        <div>
            <div
                style={{minWidth:'450px'}}>
                <Button
                    onClick={()=>{setCrtPage('portfolio')}}>
                    Portfolio
                </Button>
                <Button
                    onClick={()=>{setCrtPage('social')}}>
                    Social
                </Button>
                <Button
                    onClick={()=>{setCrtPage('partnership')}}>
                    Partnership
                </Button>
                <Button
                    onClick={()=>{setIsLogin(false);}}>
                    Logout
                </Button>
            </div>
            {router[crtPage]}
        </div>
    );
};

export default MainPage;