import { useState,useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../store/user-slice';
import { DialogContentText, Typography } from '@mui/material';


export default function ErrorMessage() {
  const [open, setOpen] = useState(false);
  const message = useSelector(state => state.user.message);
  const dispatch = useDispatch();
  const handleClose = () => {
    
    setOpen(false);
    dispatch(userActions.setMessage(""))
    
  };

  useEffect(() => {
    if(message === ""){
        setOpen(false)
    }else{
        setOpen(true)
    }
  },[message])

  return (
    <div>
      
      <Dialog
        
        open={open}
        onClose={handleClose}
        aria-labelledby="message-dialog-title"
        aria-describedby="message-dialog-description"
      >
        <DialogContentText id="message-dialog-title" sx={{width:500,height:100}}>
          <Typography variant='subtitle1' sx={{textAlign:'center',my:4}} >
            {message}
          </Typography>
          
        </DialogContentText>
      </Dialog>
    </div>
  );
}
