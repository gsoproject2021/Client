import {Box,Button,Divider,List,Paper, Typography} from '@mui/material';
import { blueGrey,cyan,teal,red,pink,purple,deepOrange,deepPurple,indigo,blue,lightBlue,green,lightGreen,lime,yellow,amber,orange,brown } from '@mui/material/colors';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRoom } from '../store/rooms-actions';
import AddPublicRoom from './AddPublicRoom';
import Event from './Event';
import ManagedUser from './ManagedUser';
import PublicRoom from './PublicRoom';


const randomColors = [cyan[500],teal[500],red[500],pink[500],purple[500],deepOrange[500],deepPurple[500],indigo[500],blue[500],lightBlue[500],green[500],lightGreen[500],lime[500],yellow[500],amber[500],orange[500],brown[500]];

export default function RoomManagement(){

    // const [editRoom,setEditRoom] = useState(false);
    // const [addMembers,setAddMembers] = useState(false);
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);
    const room = useSelector(state => state.admin.managedRoom);
    console.log(room)
    const publicRooms = useSelector(state => state.rooms.publicRooms);
    const showUsers = (user) =>{
        return <ManagedUser key={user.userId} firstName={user.firstName} userId={user.userId} />
    };
    
    const showEvent = (event)=>{
        return <Event key={event.eventId} eventId={event.eventId} subject={event.subject} date={event.date} description={event.description} />
    }

    const showPublicRooms = (room) => {
        let backgroundColor = Math.floor(Math.random()*randomColors.length);
        return <PublicRoom key={room.roomId} roomId={room.roomId} roomName={room.roomName} isManaged={true} backgroundColor={randomColors[backgroundColor]} />
    }

    const deleteRoomHandler = () => {
        dispatch(deleteRoom(room.roomId,room.users,token))
    }
    return(
        <Box sx={{py:3,mx:'10%',}}>
            <Paper sx={{bgcolor:blueGrey[400],border:2,borderColor:blueGrey[500], height:750, mx:5,py:3,px:8}}>

                <Box sx={{}} variant="text">
                    
                    <Button onClick={deleteRoomHandler} variant='contained' color='error'>Delete room</Button>
                    <Typography sx={{mt:3,ml:5}} variant='h4'>
                        {room.roomName}
                    </Typography>
                </Box>
                <Box sx={{display:'flex',height:600}}>
                    <Box sx={{width:'50%',px:1,my:2}}>
                        <Typography variant='h5'>Members</Typography>
                        <List sx={{ overflow:'auto',height:525,bgcolor:blueGrey[600] }} >
                        {room.users.map(showUsers)}
                        </List>
                    </Box>
                    <Box sx={{width:'50%',px:1,my:2}}>
                    <Typography variant='h5'>Events</Typography>
                        <List sx={{ overflow:'auto',height:525,bgcolor:blueGrey[600]}}>
                            {room.events.map(showEvent)}
                        </List>
                    </Box>
                    <Divider orientation='vertical' color={blueGrey[900]} />
                    <Box sx={{width:'50%',px:2}}>
                        <Box sx={{mb:1}} >
                            <AddPublicRoom/>
                        </Box>
                    <Typography variant='h5'>Public rooms</Typography>
                        <List sx={{ overflow:'auto',height:505,bgcolor:blueGrey[600] }}>
                            {publicRooms.map(showPublicRooms)}
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