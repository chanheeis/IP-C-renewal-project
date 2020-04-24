import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    title:{
        minWidth:'450px',
        color:theme.palette.primary.main,
        paddingLeft:'5px',
        borderLeft:`10px solid ${theme.palette.primary.main}`
    },
    btn_wrapper:{
        width:'100%',
        background:theme.palette.secondary.main
    },
    btn:{
        color:'#FFF'
    }
}))
export default useStyles;