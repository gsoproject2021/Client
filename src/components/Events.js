import {Box,Divider,Typography,IconButton,ListItemText,List,ListItemIcon,Fade,ListItemButton,Avatar,Dialog,DialogContent,DialogTitle,TextField,Button} from "@mui/material";
import { MoreVert,Add,Edit,DeleteForever } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useState,useContext } from "react";
import colors from "../utils/colors";
import {motion} from 'framer-motion/dist/framer-motion';
import AddEvent from "./AddEvent";
import Event from '../components/Event';
import RoomsContext from "../store/rooms-context";

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

const containerVariants = {
    hidden:{
        opacity:0,
        x:200
    },
    visible:{
        opacity:1,
        x:0,
        delay:3
    },
    exit:{
        opacity:0,
        x:-200
    }
}

export default function Events(){
    const roomsCtx = useContext(RoomsContext);
    const classes = useStyles();
    const [addMenu,setAddMenu] = useState(false);
    const [addEvent,setAddEvent] = useState(false);
    const [editEvent,setEditEvent] = useState(false);
    

    const addDialog = (status)=>{
        setAddEvent(status);
    }

    const showEvent = (event)=>{
        return <Event key={event.id} subject={event.subject} date={event.date} description={event.description} />
    }

    return(
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant="h5" gutterBottom >Events</Typography>
                <Box onMouseLeave={()=>setAddMenu(false)}>
                {addMenu?<Fade in={addMenu}>
                <Box onMouseLeave={()=>setAddMenu(false)}>
                {addMenu?<Fade in={addMenu}>
                    <Box  component={motion.div} 
                        variants={containerVariants}
                        initial='hidden' 
                        animate='visible' 
                        exit='exit' >
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick={()=>setAddEvent(true)}>
                                <Add/>
                            </IconButton >
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick={()=>setEditEvent(true)}>
                                <Edit/>
                            </IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick={roomsCtx.deleteEvent} >
                                <DeleteForever/>
                            </IconButton>
                    </Box>
                </Fade>:
                <IconButton sx={{color:colors.blueGray[300]}} onMouseEnter={()=>setAddMenu(true)}>
                    <MoreVert/>
                </IconButton>}
                </Box>
                </Fade>:
                <IconButton sx={{color:colors.blueGray[300]}} onMouseEnter={()=>setAddMenu(true)}>
                    <MoreVert/>
                </IconButton>}
                </Box>
            </Box>
            
            <AddEvent addEvent={addEvent} dialogState={addDialog} /> 
            <Dialog open={editEvent} onClose={()=>setEditEvent(false)} >
                <DialogTitle>
                    Edit Event
                </DialogTitle>
                <DialogContent>
                    <Box sx={{display:'flex'}}>
                    <TextField placeholder="Room name" type="text" variant="filled"  />
                    <TextField sx={{mx:1}} placeholder="Room name" type="datetime-local" variant="filled"  />
                    <TextField placeholder="Room name" type="text" variant="filled"  />
                    </Box>
                    
                    <Box >
                        <Button sx={{bgcolor:'success.light', color:'white',mt:2,mx:1}}>Edit</Button>
                        <Button onClick={()=>setEditEvent(false)} sx={{bgcolor:'error.light',color:'white',mt:2}} >Cancel</Button>
                    </Box>
                </DialogContent>
            </Dialog>
            
            <Divider light />
            <List sx={{bgcolor:'primary.light'}}>
                {roomsCtx.events.map(showEvent)}
                {/* <ListItemButton>
                    <ListItemText sx={{borderRadius:20}} >
                        <Box sx={{display:'flex',justifyContent:'space-between'}}>
                            <Typography variant='h6' gutterBottom>   
                                Birthday
                            </Typography>
                            <Typography variant="subtitle1" gutterBottom>
                                01/11/21 22:00
                            </Typography>
                        </Box>
                        <Typography>
                            jsjdkfbjskdf jdsnfjksdf njndjnjknj
                            sdfsdfsdfsdfsdfsdfsdfsdf
                        </Typography>
                    </ListItemText> 
                </ListItemButton> */}
            </List>
            
        </Box>
    );
}