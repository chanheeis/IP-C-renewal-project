import {makeStyles} from '@material-ui/core/styles';
const useStyles=makeStyles(theme=>({
    root:{
        display:'flex',
        alignItems:'center',
        marginBottom:'20px'
    },
    icon:{
        color:'#FFF',
        fontSize:'15px',
        marginRight:'5px'
    },
    typo:{
        color:'#FFF',
        fontSize:'15px',
        marginRight:'30px',
        '&:last-child':{
            marginRight:'0px'
        }
    }
}));
export default useStyles;