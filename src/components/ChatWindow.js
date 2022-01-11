import {Box, Typography,IconButton, TextField, Button} from "@mui/material";
import { ExitToApp, Send, SendOutlined } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import colors from "../utils/colors";
import { useContext } from "react";
import RoomsContext from "../store/rooms-context";


const useStyles = makeStyles({
    title:{
        display:'flex',
        justifyContent:'space-between',
        padding:16,
        color:colors.blueGray[200],
        backgroundColor:colors.blueGray[700]
    },
    messages:{
        width:'100%',
        height:'80%',
        backgroundColor:colors.blueGray[400],
        marginBottom:25
    },
    chatInput:{
        display:'flex',
        marginLeft:6,
        marginRight:6,
        backgroundColor:colors.blueGray[700]
    }
})

export default function ChatWindows(){
    const roomsCtx = useContext(RoomsContext);


    const classes = useStyles();
    return(
        <Box sx={{width:'100%',height:'100%',bgcolor:'text.disabled'}}>
            <Box  className={classes.title}>
                <Typography variant="h4" gutterBottom>{roomsCtx.roomName}</Typography>
                <IconButton sx={{color:colors.blueGray[300]}}>
                    <ExitToApp/>
                </IconButton>
            </Box>
            <Box className={classes.messages}>

            </Box>
            <Box className={classes.chatInput}>
                <TextField fullWidth/>
                <Button sx={{ml:2}} variant="contained" ><SendOutlined/></Button>
            </Box>
        </Box>
    );
}