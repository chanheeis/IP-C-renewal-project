const express=require('express');
const app=express();
const config=require('./config');
const bodyParser=require('body-parser');

const portfolioRouter=require('./router/portfolioRouter');
const accountRouter=require('./router/accountRouter');
const socialRouter=require('./router/socialRouter');
const partnershipRouter=require('./router/partnershipRouter');

//Session Settings
const session=require('express-session');
app.use(session({
    secret:'ipnc-session-secret-string',
    
}))

app.use('/account',accountRouter);
app.use('/portfolio',portfolioRouter);
app.use('/social',socialRouter);
app.use('/partnership',partnershipRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.listen(config.process.PORT,()=>{
    console.log(`Server is running on ${config.process.PORT}...`); 
});


