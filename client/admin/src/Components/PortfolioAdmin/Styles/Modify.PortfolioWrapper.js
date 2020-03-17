import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        marginLeft:'10px',
        marginRight:'10px',
        position:'relative'
    },
    modify_icon:{
        color:'#FFF',
        position:'absolute',
        top:'50px',
        right:'20px',
        cursor:'pointer',
        zIndex:100,
        '&:hover':{
            color:theme.palette.accent.light
        }
    }
}))
export default useStyles;