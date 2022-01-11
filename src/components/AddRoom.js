import { useState,useContext } from "react";
import { Dialog,DialogTitle,DialogContent,Button,TextField } from "@mui/material"
import { useMutation } from "react-query";
import axios from "axios";
import RoomsContext from "../store/rooms-context";



export default function AddRoom({addRoom,dialogState}){
    const roomsCtx = useContext(RoomsContext);
    const [openDialog,setOpenDialog] = useState(addRoom);
    
    

    const closeDialog = ()=>{
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const handleCancel = ()=>{
        setOpenDialog(false);
        dialogState(openDialog);
    }

    const addNewRoom = ()=>{   
        roomsCtx.addRoom(); 
        setOpenDialog(false);
        dialogState(openDialog);
    }

    return(
        <Dialog open={addRoom} onClose={closeDialog} >
                <DialogTitle>
                    Create New Room
                </DialogTitle>
                <DialogContent>
                    <TextField placeholder="Room name" variant="filled" onChange={(event)=>roomsCtx.setRoomName(event.target.value) } />
                    <Button sx={{bgcolor:'success.light', color:'white',mt:2,mx:1}} onClick={addNewRoom} >Add</Button>
                    <Button onClick={handleCancel} sx={{bgcolor:'error.light',color:'white',mt:2}} >Cancel</Button>
                </DialogContent>
            </Dialog>
    )
}