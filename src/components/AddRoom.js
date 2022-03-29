import { useState } from "react";
import { Dialog,DialogTitle,DialogContent,Button,TextField } from "@mui/material"
import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../store/rooms-actions";




export default function AddRoom({addRoom,dialogState}){
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();
    const [openDialog,setOpenDialog] = useState(addRoom);
    const [roomName,setRoomName] = useState('');
    

    const closeDialog = ()=>{
        setRoomName('');
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const handleCancel = ()=>{
        setRoomName('');
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const addNewRoom = ()=>{   
        dispatch(createRoom(roomName,token));
        setOpenDialog(false);
        dialogState(openDialog);
    }

    return(
        <Dialog open={addRoom} onClose={closeDialog} >
                <DialogTitle>
                    Create New Room
                </DialogTitle>
                <DialogContent>
                    <TextField placeholder="Room name" variant="filled"  onChange={event=> setRoomName(event.target.value)}/>
                    <Button sx={{bgcolor:'success.light', color:'white',mt:2,mx:1}} onClick={addNewRoom} >Add</Button>
                    <Button onClick={handleCancel} sx={{bgcolor:'error.light',color:'white',mt:2}} >Cancel</Button>
                </DialogContent>
            </Dialog>
    )
}