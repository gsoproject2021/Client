import {Dialog,DialogTitle,DialogContent,Box,Button,TextField} from '@mui/material';
import { useState,useContext } from 'react';
import RoomsContext from '../store/rooms-context';



export default function AddEvent({addEvent,dialogState}){
    const roomsCtx = useContext(RoomsContext);
    const [openDialog,setOpenDialog] = useState(false);

    const closeDialog = ()=>{
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const handleCancel = ()=>{
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const addNewEvent = ()=>{
        roomsCtx.addEvent();
        setOpenDialog(false);
        dialogState(openDialog);
    }


    return(
        <Dialog open={addEvent} onClose={closeDialog} >
                <DialogTitle>
                    Create New Event
                </DialogTitle>
                <DialogContent>
                <Box sx={{display:'flex'}}>
                    <TextField placeholder="Subject" type="text" variant="filled" onChange={(event)=>{roomsCtx.setEventSubject(event.target.value)}} />
                    <TextField sx={{mx:1}}  type="datetime-local" variant="filled" onChange={(event=>{roomsCtx.setEventDate(event.target.value)})}  />
                    <TextField placeholder="Description" type="text" variant="filled" onChange={(event)=>{roomsCtx.setEventDescription(event.target.value)}}  />
                    </Box>
                    
                    <Box >
                        <Button sx={{bgcolor:'success.light', color:'white',mt:2,mx:1}} onClick={addNewEvent} >Add</Button>
                        <Button onClick={handleCancel} sx={{bgcolor:'error.light',color:'white',mt:2}} >Cancel</Button>
                    </Box>
                </DialogContent>
            </Dialog>
    );
}