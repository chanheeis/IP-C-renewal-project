import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    text_wrapper:{
        width:'400px',
        marginTop:'10px'
    },
    title:{
        textAlign:'center',
        color:'#FFF',
        fontFamily:"'Noto Sans KR', sans-serif",
        margin:'10px 0px'
    },
    textField:{
        width:'380px',
        padding:'10px',
        borderRadius:'10px',
        border:'none',
        color:theme.palette.primary.main,
        fontSize:'15px',
        fontFamily:"'Noto Sans KR', sans-serif",
        '&:foucs':{
            outline:'none'
        }
    }
}))
export default useStyles;