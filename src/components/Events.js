import {Box,Divider,Typography,IconButton,List,Dialog,DialogContent,DialogTitle,TextField,Button} from "@mui/material";
import { Add } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import colors from "../utils/colors";
import {motion} from 'framer-motion/dist/framer-motion';
import AddEvent from "./AddEvent";
import Event from '../components/Event';
import { useSelector } from "react-redux";


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

// const containerVariants = {
//     hidden:{
//         opacity:0,
//         x:200
//     },
//     visible:{
//         opacity:1,
//         x:0,
//         delay:3
//     },
//     exit:{
//         opacity:0,
//         x:-200
//     }
// }

export default function Events(){

    const currentRoom = useSelector(state => state.cache.currentRoom);
    
    const classes = useStyles();
    // const [addMenu,setAddMenu] = useState(false);
    const [addEvent,setAddEvent] = useState(false);
    const [editEvent,setEditEvent] = useState(false);
    

    const addDialog = (status)=>{
        setAddEvent(status);
    }

    

    const showEvent = (event)=>{
        return <Event key={event.eventId} eventId={event.eventId} subject={event.subject} date={event.date} hour={event.hour} description={event.description} />
    }

    return(
        <Box className={classes.root}>
            <Box className={classes.title}>
                 <Typography variant="h5" gutterBottom >Events</Typography>
                 <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick = {() => setAddEvent(true)} >
                    <Add/>
                 </IconButton >     
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
                {currentRoom.events.map(showEvent)}
                
            </List>
            
        </Box>
    );
}