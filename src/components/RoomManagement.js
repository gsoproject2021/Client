import {Box,Button,ButtonGroup,Divider,List,Paper, Typography} from '@mui/material';
import { blueGrey } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import AddPublicRoom from './AddPublicRoom';
import Event from './Event';
import ManagedUser from './ManagedUser';

export default function RoomManagement(){

    // const [editRoom,setEditRoom] = useState(false);
    // const [addMembers,setAddMembers] = useState(false);


    const room = useSelector(state => state.admin.managedRoom);

    const showUsers = (user) =>{
        return <ManagedUser key={user.userId} firstName={user.firstName} userId={user.userId} />
    };

    const showEvent = (event)=>{
        return <Event key={event.eventId} eventId={event.eventId} subject={event.subject} date={event.date} description={event.description} />
    }
    return(
        <Box sx={{py:3,mx:'10%',}}>
            <Paper sx={{bgcolor:blueGrey[500], height:750, mx:5,py:3,px:8}}>

                <ButtonGroup sx={{display:'block'}} variant="text">
                    
                    <Button variant='contained' color='error'>Delete room</Button>

                </ButtonGroup>
                <Box sx={{display:'flex',height:600,py:3}}>
                    <Box sx={{width:'50%',px:1,my:5}}>
                        <Typography variant='h5'>Members</Typography>
                        <List sx={{ overflow:'auto',height:525,bgcolor:blueGrey[600] }} >
                        {room.users.map(showUsers)}
                        </List>
                    </Box>
                    <Box sx={{width:'50%',px:1,my:5}}>
                    <Typography variant='h5'>Events</Typography>
                        <List sx={{ overflow:'auto',height:525,bgcolor:blueGrey[600] }}>
                            {room.events.map(showEvent)}
                        </List>
                    </Box>
                    <Divider orientation='vertical' color={blueGrey[900]} />
                    <Box sx={{width:'50%',px:2}}>
                        <Box sx={{mb:1}} >
                            <AddPublicRoom/>
                        </Box>
                    <Typography variant='h5'>Public rooms</Typography>
                        <List sx={{ overflow:'auto',height:525,bgcolor:blueGrey[600] }}>
                            {room.events.map(showEvent)}
                        </List>
                    </Box>
                    
                
                </Box>
                    {/* <Box sx={{paddingLeft:40,paddingRight:40}}>
                        <Button variant='contained' size="large" fullWidth type="button">Update</Button>
                    </Box>      */}
            </Paper>
        </Box>
    );
}