import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    title_wrapper:{
        position:'absolute',
        top:'0px',
        left:'0px',
        background:'rgb(0,0,0,0.8)',
        width:'100%',
        height:'100%',
        display:'flex',
        flexFlow:'column nowrap',
        justifyContent:'center',
        alignItems:'center'
    },
    textFiled_common:{
        fontFamily:"'Noto Sans KR', sans-serif",
        textAlign:'center',
        background:'none',
        color:'#FFF',
        border:'none',
        '&:focus':{
            outline:'none'
        },
        '&::placeholder':{
            color:'#a6a6a6'
        }
    },
    textFiled_1:{
        width:'95%',
        fontSize:'20px',
    },
    textFiled_2:{
        resize:'none',
        width:'250px',
        height:'150px',
        fontSize:'12px',
        fontWeight:'light'
    },
    textFiled_3:{
        width:'250px',
        fontSize:'12px',
        fontWeight:'light'
    },
    separator:{
        content:'',
        width:'200px',
        borderBottom:'1.5px solid #FFF',
        marginTop:'15px',
        marginBottom:'15px'
    },
    typo:{
        color:'#a6a6a6',
        fontSize:'8px'
    }
}))
export default useStyles;