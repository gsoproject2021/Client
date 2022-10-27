import { Modal,Box,CircularProgress } from "@mui/material"
import {useState} from 'react';

export default function Spinner(){
    const [open,setOpen] = useState(true);

    const handleClose = () => {
        setOpen(false)
    }

    return(
        <Modal open={open} onClose={handleClose}>
          <Box sx={{display:'flex',mx:"47%",my:"20%"}} >
            <CircularProgress size={100}  />
          </Box>
        </Modal>
    )
}