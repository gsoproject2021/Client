import {Box,Button,ButtonGroup,List,Paper} from '@mui/material';
import { useSelector } from 'react-redux';
import Event from './Event';
import ManagedUser from './ManagedUser';

export default function RoomManagement(){

    const room = useSelector(state => state.admin.managedRoom);

    const showUsers = (user) =>{
        // return <User key={user.userId} id={user.userId} username={user.firstName} />
        return <ManagedUser key={user.userId} firstName={user.firstName} userId={user.userId} />
    };

    const showEvent = (event)=>{
        return <Event key={event.eventId} eventId={event.eventId} subject={event.subject} date={event.date} description={event.description} />
    }
    return(
        <Box sx={{width:"100%",py:3}}>
            <Paper sx={{ height:750, mx:3,py:3,px:10}}>
                <ButtonGroup sx={{display:'block'}} variant="text">
                    <Button>Create room</Button>
                    <Button>Edit room name</Button>
                    <Button>Edit members</Button>
                    <Button>Delete room</Button>
                    <Button>Create event</Button>
                    <Button>Edit event</Button>
                    <Button>Delete event</Button>
                </ButtonGroup>
                <Box sx={{display:'flex',py:3,px:2}}>
                    <List sx={{width:'50%'}}>
                       {room.users.map(showUsers)}
                    </List>
                    <List sx={{width:'50%'}}>
                        {room.event.map(showEvent)}
                    </List>
                
                </Box>
                    <Box sx={{paddingLeft:30,paddingRight:30}}>
                        <Button size="large" fullWidth type="button">Update</Button>
                    </Box>     
            </Paper>
        </Box>
    );
}