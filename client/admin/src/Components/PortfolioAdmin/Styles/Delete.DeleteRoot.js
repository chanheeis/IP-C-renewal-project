import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        minWidth:'1300px',
        height:'auto',
        display:'flex',
        flexFlow:'column nowrap',
        alignItems:'center',
        background:theme.palette.primary.main
    },
    title:{
        alignSelf:'flex-start',
        color:'#FFF',
        paddingLeft:'10px',
        borderLeft:`5px solid #FFF`,
        marginLeft:'20px',
        fontSize:'20px'
    },
    wrapper:{
        width:'1300px',
        height:'auto',
        marginBottom:'30px',
    },
    btn_wrapper:{
        listStyle:'none',
        display:'flex',
        width:'max-content',
        marginBottom:'50px'
    },
    btn:{
        color:'#FFF',
        cursor:'pointer',
        '&:hover':{
            color:'#CCC'   
        },
        marginLeft:'5px',
        marginRight:'5px'
    },
    crtBtn:{
        color:theme.palette.accent.light,
        cursor:'pointer',
        marginLeft:'5px',
        marginRight:'5px'
    }
}))
export default useStyles;