import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        margin: '30px 0',
        justifyContent: 'center',
        alignItems: 'center',
        },
        heading: {
            color: 'rgba(0,183,255, 1)',
        },
        image: {
            marginLeft: '15px',
        },
        [theme.breakpoints.down('sm')]: {
            mainContainer: {
                flexDirection: 'column-reverse' 
             }
        }
        
}));