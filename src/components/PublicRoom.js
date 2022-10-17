import { useCallback, useContext, useState } from 'react';
import { ListItemButton,Box,IconButton,ListItemIcon,Avatar,ListItemText,Divider,Dialog,DialogActions,DialogContent,DialogTitle,Button,TextField } from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';
import * as yup from "yup";
import { useFormik } from "formik";
import { blueGrey, } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { updatePublicRoom,deletePublicRoom } from '../store/rooms-actions';
import { roomsActions } from '../store/room-slice';
import { SocketContext } from '../context/SocketContext';


const schema = yup.object().shape({
    roomName: yup.string().required("Room name can't be empty"),
})

export default function PublicRoom({roomId,roomName,type,isManaged,backgroundColor}){
    
    const socket = useContext(SocketContext);
    const [open,setOpen] = useState(false);
    const dispatch = useDispatch();
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const publicRoomData = useSelector(state => state.rooms.publicRoomData);
    const token = useSelector(state => state.user.token);
    const formik = useFormik({
        initialValues:roomName,
        validationSchema:schema,
        onSubmit: data => {    
            dispatch(updatePublicRoom(token,data.roomName,roomId))
            setOpen(false);
        }
    })

    useEffect(() =>{
        formik.setValues({roomName:roomName})
    },[])

    const handleClickOpen = () => {
        setOpen(true);
      };
  
      const handleClose = () => {
        setOpen(false);
      };

    const handleChangeRoom = () => {
        dispatch(roomsActions.setPublicRoomData({roomId,roomName}));
    }

    const handleDeletePublic = () => {
        dispatch(deletePublicRoom(token,roomId))
    }

    // useEffect(() => {
    //     socket.emit("getPublicRoom",{roomName,type,publicRoomData});
    // },[publicRoomData]);

    return(
        <div>
            {isManaged?
            <Box sx={{display:'flex'}} >
            <ListItemButton  onClick={handleClickOpen} >
                <ListItemIcon>
                    <Avatar sx={{bgcolor: backgroundColor }}>{roomName[0]}</Avatar>
                </ListItemIcon>
                <ListItemText>
                    {roomName}
                </ListItemText>
                
            </ListItemButton>
            {isManaged?<Box sx={{py:1}} >
                <IconButton onClick={handleDeletePublic} >
                    <DeleteOutline sx={{color: blueGrey[100] }} />
                </IconButton>
             </Box>:null}
            <Divider />
            </Box>
            :
            <>
            <ListItemButton onClick={handleChangeRoom} >
                <ListItemIcon>
                    <Avatar sx={{bgcolor: backgroundColor }}>{roomName[0]}</Avatar>
                </ListItemIcon>
                <ListItemText>
                    {roomName}
                </ListItemText>
            </ListItemButton>
            <Divider />
            </>}

            
            
        
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={formik.handleSubmit} >
                <DialogTitle>Edit public room</DialogTitle>
                <DialogContent>
                
                <TextField
                    label="Room name"
                    type="text"
                    fullWidthd
                    name="roomName"
                    variant="standard"
                    value={formik.values.roomName}
                    onChange={formik.handleChange}
                    error={formik.touched.roomName && Boolean(formik.errors.roomName)}
                    helperText={formik.touched.roomName && formik.errors.roomName }
                />
                </DialogContent>
                <DialogActions>
                <Button variant="contained" color="error" size="small" onClick={handleClose}>Cancel</Button>
                <Button type="submit" variant="contained" color="success" size="small" >Submit</Button>
                </DialogActions>
            </form>
        </Dialog>
        </div>
    );
}