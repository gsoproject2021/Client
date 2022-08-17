import {Dialog,DialogTitle,DialogContent,TextField,Button} from '@mui/material';
import {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateRoom } from '../store/rooms-actions';




export default function EditRoom({editRoom,dialogState,roomName}){
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const [name,setName] = useState(roomName);
    
    const [openDialog,setOpenDialog] = useState(false);
    
    const closeDialog = ()=>{
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const handleCancel = ()=>{
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const handleEditRoom = ()=>{
        dispatch(updateRoom(currentRoom.roomId,name,token))
        setOpenDialog(false);
        dialogState(openDialog);
        setName('');
    }
    

    return(
        <Dialog open={editRoom} onClose={closeDialog} >
                <DialogTitle>
                    Edit Room
                </DialogTitle>
                <DialogContent>
                    <TextField placeholder="Room name" variant="filled" autoFocus value={name} onChange={event => setName(event.target.value)} />
                    <Button sx={{bgcolor:'success.light', color:'white',mt:2,mx:1}} onClick={handleEditRoom} >Update</Button>
                    <Button onClick={handleCancel} sx={{bgcolor:'error.light',color:'white',mt:2}} >Cancel</Button>
                </DialogContent>
            </Dialog>
    );
} 