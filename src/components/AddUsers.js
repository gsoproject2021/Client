import { useEffect, useState } from 'react';
import { Dialog,DialogTitle,DialogContent,ListItemText,List,ListItem,ListItemButton,Checkbox,Avatar,ListItemAvatar, Button, Typography } from '@mui/material';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUsersToRoom } from '../store/cache-actions';




export default function AddUsers({openDialog,closeDialog}){
    const token = useSelector(state => state.user.token);
    const currentRoom = useSelector(state => state.cache.currentRoom);
    const dispatch = useDispatch();
    const [checked,setChecked] = useState([]);
    const [users,setUsers] = useState([]);

    const handleClose = () => {
        closeDialog(false);
    }

    const handleToggle = (user) => () => {
        const currentIndex = checked.indexOf(user);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(user);
        } else {
          newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const addUsers = () => {
        const data = checked.map(roomUser => {return {RoomID:currentRoom.roomId,UserID:roomUser.userId}});
        dispatch(addUsersToRoom(data,currentRoom,token));
        setChecked([]);
        closeDialog(false);
        console.log(currentRoom);
    }

    useEffect(()=>{
        axios.get('http://localhost:4000/roomUsers',{headers:{Authorization:`Bearer ${token}`}})
        .then(response => {
            if(!response){
                throw new Error("something went wrong");
            }
            setUsers(response.data);
            console.log(users);
        })
        .catch(err => {
            console.log(err);
        })
    },[]);



    return(
        <Dialog
        
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
            <DialogTitle id="alert-dialog-title">
            <Typography variant='h4'>Users</Typography>
            </DialogTitle>
            <DialogContent>
            <List dense sx={{ width: '100%',height: 500, maxWidth: 360, bgcolor: 'background.paper' ,overflow: 'auto' }}>
        {users.map((user) => {
        
        return (
          <ListItem
            sx = {{width:275}}
            key={user.UserId}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(user)}
                checked={checked.indexOf(user) !== -1}
                inputProps={{ 'aria-labelledby': `user.userId` }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  
                />
              </ListItemAvatar>
              <ListItemText id={`${user.userId}`} primary={`${user.firstName}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
      <Button onClick={addUsers} sx={{mt:2}} variant='contained' fullWidth>add</Button>
            </DialogContent>
        
      </Dialog>
    );
      
}



