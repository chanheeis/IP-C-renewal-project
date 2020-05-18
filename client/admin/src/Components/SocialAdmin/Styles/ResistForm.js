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
}));
export default useStyles;