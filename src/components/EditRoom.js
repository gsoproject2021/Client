import {Dialog,DialogTitle,DialogContent,TextField,Button} from '@mui/material';
import { useContext, useState } from 'react';
import RoomsContext from '../store/rooms-context';



export default function EditRoom({editRoom,dialogState}){
    
    const [openDialog,setOpenDialog] = useState(false);

    const roomsCtx = useContext(RoomsContext);

    const closeDialog = ()=>{
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const handleCancel = ()=>{
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const handleEditRoom = ()=>{
        roomsCtx.editRoom();
        setOpenDialog(false);
        dialogState(openDialog);
    }

    return(
        <Dialog open={editRoom} onClose={closeDialog} >
                <DialogTitle>
                    Edit Room
                </DialogTitle>
                <DialogContent>
                    <TextField placeholder="Room name" variant="filled" value={roomsCtx.roomName} onChange={(event=>{roomsCtx.setRoomName(event.target.value)})} />
                    <Button sx={{bgcolor:'success.light', color:'white',mt:2,mx:1}} onClick={handleEditRoom} >Update</Button>
                    <Button onClick={handleCancel} sx={{bgcolor:'error.light',color:'white',mt:2}} >Cancel</Button>
                </DialogContent>
            </Dialog>
    );
} 