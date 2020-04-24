import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        marginLeft:'10px',
        marginRight:'10px',
        position:'relative'
    },
    icon:{
        position:'absolute',
        top:'50px',
        right:'20px',
        cursor:'pointer',
        zIndex:100,
    },
    modify_icon:{
        color:'#FFF',
        '&:hover':{
            color:theme.palette.accent.light
        }
    },
    done_icon:{
        color:'#3CB371'
    }
}))
export default useStyles;