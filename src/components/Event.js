import { ListItemButton,ListItemText,Box,Typography,IconButton } from "@mui/material";
import { Edit,DeleteForever} from "@mui/icons-material";
import {motion} from 'framer-motion/dist/framer-motion';
import colors from "../utils/colors";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { removeEvent } from "../store/cache-actions";
import { cacheActions } from "../store/cache-slice";
import EditEvent from "./EditEvent";
import { blueGrey,indigo } from "@mui/material/colors";


export default function Event({eventId,subject,date,hour,description}){
    
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const data = useSelector(state => state.user.data);
    const currentRoom = useSelector(state => state.rooms.currentRoom);

    const [isSelected,setIsSelected] = useState();
    const [actions,setActions] = useState(false);
    const [openEditDialog,setOpenEditDialog] = useState(false);

    // const tempDate = date.split(' ');
    const formatedDate = `${date}T${hour}`;

    const handleClick = ()=>{
        setIsSelected(eventId);
        console.log(isSelected,eventId);
        console.log(formatedDate);
        
    }

    const editDialog = (status) => {
        setOpenEditDialog(status);
    }

    const deleteEvent = () => {
        dispatch(removeEvent(eventId,currentRoom.roomId,token));
    }
    
    return(
                <ListItemButton sx={{color:blueGrey['A100'],backgroundColor:indigo['700']}} onClick={handleClick}  onMouseEnter={() => setActions(true)} onMouseLeave={() => setActions(false)} >
                    <ListItemText sx={{borderRadius:20}} >
                        <Box sx={{display:'flex',justifyContent:'space-between'}}>  
                            <Typography variant='h6' gutterBottom>   
                                {subject}
                            </Typography>
                            
                            <Typography variant="subtitle1" gutterBottom>
                                {hour} {date}
                            </Typography>
                            {actions &&
                            <Box>
                            <IconButton size="small" component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[200]}} onClick = {() => setOpenEditDialog(true)} >
                                    <Edit/>
                                </IconButton> 
                                <IconButton size="small" component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[200]}} onClick = { deleteEvent } >
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





