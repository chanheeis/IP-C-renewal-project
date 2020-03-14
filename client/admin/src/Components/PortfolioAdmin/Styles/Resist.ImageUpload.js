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
    },
    icon:{
        color:theme.palette.text.secondary,
        position:'absolute',
        top:'10px',
        right:'10px',
        cursor:'pointer',
        '&:hover':{
            color:theme.palette.accent.main
        }
    },
    upload_btn:{
        width:'90%',
        height:'auto',
        fontWeight:'bold',
        fontFamily:"'Noto Sans KR', sans-serif",
        background:theme.palette.secondary.light,
        border:theme.palette.accent.light,
        '&:hover':{
            background:theme.palette.accent.light,
            border:theme.palette.secondary.light,
        }
    },
    upload_typo:{
        color:'#FFF',
        fontFamily:"'Noto Sans KR', sans-serif"
    }
}));
export default useStyles;