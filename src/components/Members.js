import {Box,List,ListItemButton,ListItemIcon,ListItemText,IconButton,Typography,Divider,Avatar} from '@mui/material';
import { MoreVert } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import colors from '../utils/colors';
const useStyles = makeStyles({
    root:{
        height:'50%',
        
    },
    title:{
        display:'flex',
        justifyContent:'space-between',
        boxShadow:10,
        backgroundColor:[colors.blueGray[700]],
        padding:4,
        borderRadius:8,
        marginBottom:4,
        color:colors.blueGray[300]
    
    }
})

export default function Members(){
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant="h5" gutterBottom >Members</Typography>
                <IconButton sx={{color:colors.blueGray[300]}} >
                    <MoreVert/>
                </IconButton>
            </Box>
            
            <Divider light />
            <List sx={{bgcolor:'primary.light'}}>
                <ListItemButton>
                    <ListItemIcon>
                        <Avatar></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                        Sport
                    </ListItemText>
                </ListItemButton>
            </List>
            
        </Box>
    );
}