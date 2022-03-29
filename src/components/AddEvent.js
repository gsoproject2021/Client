import {Dialog,DialogTitle,DialogContent,Box,Button,TextField} from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../store/cache-actions';
import { cacheActions } from '../store/cache-slice';




export default function AddEvent({addEvent,dialogState}){
    const token = useSelector(state => state.user.token);
    const currentRoom = useSelector(state => state.cache.currentRoom);
    const dispatch = useDispatch();
    
    const [subject,setSubject] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');


    const closeDialog = ()=>{
        dialogState(false);
    }

    const handleCancel = ()=>{
        dialogState(false);
    }

    const addNewEvent = ()=>{
        
        const event = {eventSubject:subject,eventDate:date,eventDescription:description};
        dispatch(createEvent(currentRoom,event,token));
        dispatch(cacheActions.updateCache(currentRoom));
        console.log(currentRoom.events);
        dialogState(false);
    }


    return(
        <Dialog open={addEvent} onClose={closeDialog} >
                <DialogTitle>
                    Create New Event
                </DialogTitle>
                <DialogContent>
                <Box sx={{display:'flex'}}>
                    <TextField placeholder="Subject" type="text" variant="filled" onChange = {(event => setSubject(event.target.value))} />
                    <TextField sx={{mx:1}}  type="datetime-local" variant="filled" onChange = {(event => setDate(event.target.value))} />
                    <TextField placeholder="Description" type="text" variant="filled" onChange = {(event) => setDescription(event.target.value)} />
                </Box>
                    
                <Box >
                    <Button sx={{bgcolor:'success.light', color:'white',mt:2,mx:1}} onClick={addNewEvent} >Add</Button>
                    <Button onClick={handleCancel} sx={{bgcolor:'error.light',color:'white',mt:2}} >Cancel</Button>
                </Box>
                </DialogContent>
            </Dialog>
    );
}