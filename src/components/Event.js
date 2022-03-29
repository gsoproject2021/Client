import { ListItemButton,ListItemText,Box,Typography,IconButton } from "@mui/material";
import { Edit,DeleteForever} from "@mui/icons-material";
import {motion} from 'framer-motion/dist/framer-motion';
import colors from "../utils/colors";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeEvent } from "../store/cache-actions";
import { cacheActions } from "../store/cache-slice";
import EditEvent from "./EditEvent";



export default function Event({eventId,subject,date,hour,description}){
    
    const dispatch = useDispatch();
    const currentRoom = useSelector(state => state.cache.currentRoom);

    const [isSelected,setIsSelected] = useState();
    const [actions,setActions] = useState(false);
    const [openEditDialog,setOpenEditDialog] = useState(false);

    const tempDate = date.split(' ');
    const formatedDate = `${tempDate[0]}T${tempDate[1]}`;

    const handleClick = ()=>{
        setIsSelected(eventId);
        console.log(isSelected,eventId);
        
    }

    const editDialog = (status) => {
        setOpenEditDialog(status);
    }

    const deleteEvent = () => {
        dispatch(removeEvent(eventId));
        dispatch(cacheActions.updateCache(currentRoom));
    }
    
    return(
                <ListItemButton onClick={handleClick}  onMouseEnter={() => setActions(true)} onMouseLeave={() => setActions(false)} >
                    <ListItemText sx={{borderRadius:20}} >
                        <Box sx={{display:'flex',justifyContent:'space-between'}}>  
                            <Typography variant='h6' gutterBottom>   
                                {subject}
                            </Typography>
                            
                            <Typography variant="subtitle1" gutterBottom>
                                `${hour} ${date}`
                            </Typography>
                            {actions &&
                            <Box>
                                <IconButton size="small" component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick = {() => setOpenEditDialog(true)} >
                                    <Edit/>
                                </IconButton> 
                                <IconButton size="small" component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick = { deleteEvent } >
                                    <DeleteForever/>
                                </IconButton>
                            </Box>
                            }
                        <EditEvent editEvent = {openEditDialog} dialogState={editDialog} eventId={eventId} subject={subject} date={formatedDate} description={description} />
                            
                        </Box>
                        <Typography>
                            {description}
                        </Typography>
                    </ListItemText> 
                </ListItemButton>
    );
}





