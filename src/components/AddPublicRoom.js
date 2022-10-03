import { useState } from "react";
import { Button,Dialog,DialogTitle,DialogActions,DialogContent,TextField } from "@mui/material"
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { addPublicRoom } from "../store/rooms-actions";


const schema = yup.object().shape({
    roomName: yup.string().required("room name can't be empty"),
})

export default function AddPublicRoom (){
    const token = useSelector(state => state.user.token);
    const dispatch = useDispatch();
    
    const [open, setOpen] = useState(false);
    const  formik  = useFormik({
        initialValues:{
            roomName: ""
        },
        validationSchema: schema,
        onSubmit: data => {
            dispatch(addPublicRoom(token,data))
            setOpen(false)
        }
    })

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
        <Button size="small" color="success" variant="contained" onClick={handleClickOpen}>
            create
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <form onSubmit={formik.handleSubmit} >
                <DialogTitle>New public room</DialogTitle>
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