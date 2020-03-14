import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        width:'100%',
        height:'auto',
        display:'flex',
        flexFlow:'column nowrap',
        alignSelf:'flex-start',
        background:theme.palette.primary.main
    },
    title:{
        color:'#FFF',
        paddingLeft:'10px',
        borderLeft:`5px solid #FFF`,
        marginLeft:'20px',
        fontSize:'20px'
    },
    wrapper:{
        width:'100%',
        height:'auto',
        marginBottom:'50px',
        display:'flex',
        flexFlow:'row nowrap'
    }
}))
export default useStyles;