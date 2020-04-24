import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        minWidth:'600px',
        height:'auto',
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
    submit_btn:{
        marginTop:'20px',
        width:'400px',
        color:'#FFF',
        fontWeight:'bold',
        fontFamily:"'Noto Sans KR', sans-serif",
        background:theme.palette.secondary.light,
        border:theme.palette.accent.light,
        '&:hover':{
            background:theme.palette.accent.light,
            border:theme.palette.secondary.light,
        }
    },
    disable_btn:{
        marginTop:'20px',
        width:'400px',
        color:'#FFF',
        fontWeight:'bold',
        fontFamily:"'Noto Sans KR', sans-serif",
        background:theme.palette.text.secondary,
        border:theme.palette.accent.light,
    }
}))
export default useStyles;