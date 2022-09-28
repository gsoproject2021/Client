import { useState } from 'react';
import { ListItemButton,Box,IconButton,ListItemIcon,Avatar,ListItemText,Divider,Dialog,DialogActions,DialogContent,DialogTitle,Button,TextField } from "@mui/material";
import { DeleteOutline } from '@mui/icons-material';
import * as yup from "yup";
import { useFormik } from "formik";
import { blueGrey, deepPurple } from '@mui/material/colors';

const schema = yup.object().shape({
    roomName: yup.string().required("Room name can't be empty"),
})

export default function PublicRoom({roomId,roomName,isManaged,backgroundColor}){
    const [open,setOpen] = useState(false);

    const formik = useFormik({
        initialValues:roomName,
        validationSchema:schema,
        onSubmit: data => {
            console.log(data);
        }
    })

    const handleClickOpen = () => {
        setOpen(true);
      };
  
      const handleClose = () => {
        setOpen(false);
      };

    const handleChangeRoom = () => {
        console.log("2")
    }

    const deletePublicRoom = () => {
        console.log("delete")
    }

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
                <IconButton >
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