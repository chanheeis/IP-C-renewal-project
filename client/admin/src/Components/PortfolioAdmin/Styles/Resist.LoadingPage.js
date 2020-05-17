import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'400px',
        height:'600px',
        boxSizing:'border-box',
        position:'relative',
        borderRadius:'10px',
        justifyContent:'center',
        overflow:'hidden',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        border:`3px solid ${theme.palette.secondary.main}`,
        background:'#FFF'
    }
}));
export default useStyles;