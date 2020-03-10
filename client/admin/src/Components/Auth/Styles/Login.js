import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100vh',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        background:theme.palette.primary.main
    },
    login_wrapper:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        width:'500px',
        padding:'20px',
        border:`5px solid ${theme.palette.secondary.main}`,
        borderRadius:'20px',
        background:'#FFF'
    },
    btn:{
        marginTop:'10px',
        width:'70%',
        background:theme.palette.secondary.main,
        color:'#FFF',
        fontWeight:'bold',
        '&:hover':{
            background:theme.palette.accent.light
        }
    },
    input:{
        margin:'20px',
        width:'70%'
    },
    title:{
        fontSize:'30px',
        fontWeight:'bold',
        color:theme.palette.secondary.main
    }
}))
export default useStyles;