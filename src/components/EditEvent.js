import { Dialog,DialogTitle,DialogContent,Box,TextField,Button } from "@mui/material";
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { cacheActions } from "../store/cache-slice";
import { updateEventDetails } from "../store/cache-actions";

export default function EditEvent({editEvent,dialogState,eventId,subject,date,description}){
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const currentRoom = useSelector(state => state.rooms.currentRoom);

    const [newSubject,setNewSubject] = useState(subject);
    const [newDate,setNewDate] = useState(date);
    const [newDescription,setNewDescription] = useState(description);

    const closeDialog = () =>{
        dialogState(false);
    }

    const handleCancel = ()=>{
        dialogState(false);
    }

    const updateEvent = () => {
        const currentEvent = {eventId:eventId,eventSubject:newSubject,eventDate:newDate,eventDescription:newDescription};
        console.log(currentEvent);
        dispatch(updateEventDetails(currentEvent,currentRoom.roomId,token));
        
        dialogState(false);
    }

    return(
            <Dialog open={editEvent} onClose={closeDialog} >
                <DialogTitle>
                    Edit Event
                </DialogTitle>
                <DialogContent>
                <Box sx={{display:'flex'}}>
                    <TextField placeholder="Subject" type="text" variant="filled" value={newSubject} onChange={(event) => setNewSubject(event.target.value)} />
                    <TextField sx={{mx:1}}  type="datetime-local" variant="filled" value={newDate} onChange={(event) => setNewDate(event.target.value)} />
                    <TextField placeholder="Description" type="text" variant="filled" value={newDescription} onChange={(event) => setNewDescription(event.target.value)} />
                </Box>
                    
                <Box >
                    <Button sx={{bgcolor:'success.light', color:'white',mt:2,mx:1}} onClick={updateEvent} >Edit</Button>
                    <Button onClick={handleCancel} sx={{bgcolor:'error.light',color:'white',mt:2}} >Cancel</Button>
                </Box>
                </DialogContent>
            </Dialog>
    );
}