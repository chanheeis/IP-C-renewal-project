import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100vw',
        paddingBottom:'50px',
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center',
        background:theme.palette.primary.main
    },
    title:{
        color:'#FFF',
        paddingLeft:'10px',
        borderLeft:`5px solid #FFF`,
        marginLeft:'20px',
        alignSelf:'flex-start',
        fontSize:'20px'
    },
    wrapper:{
        width:'700px',
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center'
    }
}));
export default useStyles;