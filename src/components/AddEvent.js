import {Dialog,DialogTitle,DialogContent,Box,Button,TextField} from '@mui/material';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEvent } from '../store/cache-actions';


/**
 * AddEvent component its dialog for creating events for room
 * 
 */


export default function AddEvent({addEvent,dialogState}){
    


    const token = useSelector(state => state.user.token);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    const [subject,setSubject] = useState('');
    const [date,setDate] = useState('');
    const [description,setDescription] = useState('');
    
    /*
    * function that close the dialog
    */
    const closeDialog = ()=>{
        dialogState(false);
    }

    /*
    * function that close the dialog when clicking on cancel
    */
    const handleCancel = ()=>{
        dialogState(false);
    }

    /*
    * this function dispatch createEvent function it send event details to the server
    */
    const addNewEvent = ()=>{
        
        const event = {eventSubject:subject,eventDate:date,eventDescription:description};
        dispatch(createEvent(currentRoom,event,token));
        setSubject('');
        setDate('');
        setDescription('')
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