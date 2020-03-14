import {makeStyles} from '@material-ui/core/styles'
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        height:'100%',
        position:'relative',
        borderRadius:'5px',
        overflow:'hidden',
        margin:0
    },
    cancel_icon:{
        position:'absolute',
        top:'5px',
        right:'5px',
        cursor:'pointer',
        zIndex:100,
        color:'#FFF',
        '&:hover':{
            color:theme.palette.accent.light
        }
    },
    img_wrapper:{
        width:'100%',
        height:'100%',
        position:'relative',
    },
    thumbnail:{
        width:'100%',
        height:'100%',
        position:'absolute',
    },
    thumbnail_typo:{
        color:'#FFF',
        fontFamily:"'Noto Sans KR', sans-serif",
        zIndex:100,
        position:'absolute',
        bottom:'10px',
        left:'10px'        
    }
}))
export default useStyles