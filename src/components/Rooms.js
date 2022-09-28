import { Edit, MoreVert,Add, DeleteForever } from "@mui/icons-material";
import {Box, Divider, Typography,List, ListItemButton, ListItemIcon, Avatar, ListItemText, IconButton, Fade} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState,useEffect, useContext} from "react";
import {motion} from 'framer-motion/dist/framer-motion';
import colors from "../utils/colors";
import {cyan,teal,blueGrey,red,pink,purple,deepOrange,deepPurple,indigo,blue,lightBlue,green,lightGreen,lime,yellow,amber,orange,brown} from '@mui/material/colors';
import Room from "./Room";
import AddRoom from "./AddRoom";
import EditRoom from "./EditRoom";
import { useSelector,useDispatch } from "react-redux";
import { fetchRoomsData,deleteRoom } from "../store/rooms-actions";


import { SocketContext } from "../utils/socket";
import PublicRoom from "./PublicRoom";


const useStyles = makeStyles({
    root:{
        height:'100vh'
    },
    title:{
        display:'flex',
        justifyContent:'space-between',
        boxShadow:10,
        backgroundColor:blueGrey['900'],
        padding:12,
        marginBottom:4
    }
})

const containerVariants = {
    hidden:{
        opacity:0,
        x:200
    },
    visible:{
        opacity:1,
        x:0,
        delay:3
    },
    exit:{
        opacity:0,
        x:-200
    }
}

const randomColors = [cyan[500],teal[500],red[500],pink[500],purple[500],deepOrange[500],deepPurple[500],indigo[500],blue[500],lightBlue[500],green[500],lightGreen[500],lime[500],yellow[500],amber[500],orange[500],brown[500]];

const publicRooms = [
    {
        roomId:1,
        roomName:"Test",
        isManaged:true,
    },
    {
        roomId:2,
        roomName:"Sport",
        isManaged:false,
    },
    {
        roomId:3,
        roomName:"Food",
        isManaged:false,
    },
    {
        roomId:4,
        roomName:"Movies",
        isManaged:false,
    },
]

export default function Rooms(){
    const socket = useContext(SocketContext);
    const user = useSelector(state => state.user);
    const rooms = useSelector(state => state.rooms.rooms);
    const current = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch();
    const classes = useStyles();
    
    const [addRoom,setAddRoom] = useState(false);
    const [editRoom,setEditRoom] = useState(false);
    
    
    const removeRoom = ()=>{
        dispatch(deleteRoom(current.roomId,current.users,user.token)); 
    }
    
    const showRooms = (room)=>{
      return  <Room key={room.roomId} roomName={room.roomName} roomId={room.roomId} image={room.image} />
    }
    const addDialog = (addStatus)=>{
        setAddRoom(addStatus);    
    }

    const editDialog = (editStatus)=>{
        setEditRoom(editStatus);
    }

    
    useEffect(()=>{
        dispatch(fetchRoomsData(user.data.userId,user.token));
    },[dispatch]);

    useEffect(() => {
        let userRooms = rooms.map(room => room.roomId);
        let data = {userId:user.data.userId,rooms:userRooms};
        socket.emit('user_connected',data);
    },)

    useEffect(() => {
        socket.on("user_online", socket => {
            console.log(socket);
        })
    })

    const showPublicRooms = (room) => {
        let backgroundColor = Math.floor(Math.random()*randomColors.length);
        return <PublicRoom key={room.roomId} roomId={room.roomId} roomName={room.roomName} isManaged={room.isManaged} backgroundColor={randomColors[backgroundColor]} />
    }
    
    return(
        <Box className={classes.root}>
            
            <Box className={classes.title}>
                <Typography sx={{color:blueGrey[100]}} variant="h5" gutterBottom >Rooms</Typography>
                <Box >
                
                    <Box  component={motion.div} 
                        variants={containerVariants}
                        initial='hidden' 
                        animate='visible' 
                        exit='exit' >
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:blueGrey[100]}} onClick={()=>setAddRoom(true)}>
                                <Add/>
                            </IconButton >
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:blueGrey[100]}} onClick={()=>setEditRoom(true)}>
                                <Edit/>
                            </IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:blueGrey[100]}} onClick={removeRoom} >
                                <DeleteForever/>
                            </IconButton>
                    </Box>
                
                
                </Box>
            </Box>

            <AddRoom addRoom={addRoom} dialogState={addDialog} />
            <EditRoom editRoom={editRoom} roomName={current.roomName} dialogState={editDialog} />
            

            <Divider  />
            <List  sx={{bgcolor:blueGrey['600'],color:blueGrey['100'],px:1}}>
                {publicRooms.map(showPublicRooms)}
                <ListItemButton >
                    <ListItemIcon>
                        <Avatar></Avatar>
                    </ListItemIcon>
                    <ListItemText >
                        Sport
                    </ListItemText>
                </ListItemButton>
                <Divider />
                <ListItemButton >
                    <ListItemIcon>
                        <Avatar></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                        Food
                    </ListItemText>
                </ListItemButton>
                <Divider />
                <ListItemButton >
                    <ListItemIcon>
                        <Avatar></Avatar>
                    </ListItemIcon>
                    <ListItemText>
                        Restaurants
                    </ListItemText>
                </ListItemButton>

            </List >
            <Divider light />
            <List sx={{bgcolor:blueGrey['800'],color:blueGrey['A100'],px:1}}>
                {rooms.map(showRooms)||<div>Loading...</div>}
                        
            </List>
        </Box>
    );

}   



// onMouseLeave={()=>setAddMenu(addMenu => !addMenu)
// onMouseEnter={()=>setAddMenu(addMenu => !addMenu)}