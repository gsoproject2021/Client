import {Box,Button,ButtonGroup,List,Paper} from '@mui/material';
import { useSelector } from 'react-redux';
import Event from './Event';
import ManagedUser from './ManagedUser';

export default function RoomManagement(){

    // const [editRoom,setEditRoom] = useState(false);
    // const [addMembers,setAddMembers] = useState(false);


    const room = useSelector(state => state.admin.managedRoom);

    const showUsers = (user) =>{
        return <ManagedUser key={user.userId} firstName={user.FirstName} userId={user.userId} />
    };

    const showEvent = (event)=>{
        return <Event key={event.eventId} eventId={event.eventId} subject={event.subject} date={event.date} description={event.description} />
    }
    return(
        <Box sx={{width:"100%",py:3}}>
            <Paper sx={{ height:750, mx:3,py:3,px:10}}>

                <ButtonGroup sx={{display:'block'}} variant="text">
                    
                    <Button variant='contained' color="success">Edit room name</Button>
                    <Button variant='contained' color='warning' >Edit members</Button>
                    <Button variant='contained' color='error'>Delete room</Button>

                </ButtonGroup>
                <Box sx={{display:'flex',py:3,px:2}}>
                    <Box sx={{width:'50%',px:8}}>
                        <List >
                        {room.users.map(showUsers)}
                        </List>
                    </Box>
                    <Box sx={{width:'50%',px:8}}>
                        <List >
                            {room.events.map(showEvent)}
                        </List>
                    </Box>
                    
                
                </Box>
                    <Box sx={{paddingLeft:40,paddingRight:40}}>
                        <Button variant='contained' size="large" fullWidth type="button">Update</Button>
                    </Box>     
            </Paper>
        </Box>
    );
}