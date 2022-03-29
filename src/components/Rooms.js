import { Edit, MoreVert,Add, DeleteForever } from "@mui/icons-material";
import {Box, Divider, Typography,List, ListItemButton, ListItemIcon, Avatar, ListItemText, IconButton, Fade} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState,useEffect} from "react";
import {motion} from 'framer-motion/dist/framer-motion';
import colors from "../utils/colors";
import {cyan,teal} from '@mui/material/colors';
import Room from "./Room";
import AddRoom from "./AddRoom";
import EditRoom from "./EditRoom";
import { useSelector,useDispatch } from "react-redux";
import { fetchRoomsData,deleteRoom } from "../store/rooms-actions";



const useStyles = makeStyles({
    root:{
        
    },
    title:{
        display:'flex',
        justifyContent:'space-between',
        boxShadow:10,
        backgroundColor:[colors.blueGray[900]],
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

export default function Rooms(){
    
    const user = useSelector(state => state.user);
    const rooms = useSelector(state => state.rooms.rooms);
    const current = useSelector(state => state.cache.currentRoom);
    const dispatch = useDispatch();

    const classes = useStyles();
    const [addMenu,setAddMenu] = useState(false);
    const [addRoom,setAddRoom] = useState(false);
    const [editRoom,setEditRoom] = useState(false);
    

    const removeRoom = ()=>{
        dispatch(deleteRoom(current.roomId,user.token)); 
    }
    
    const showRooms = (room)=>{
      return  <Room key={room.id} roomName={room.roomName} id={room.id} />
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
    
    return(
        <Box className={classes.root}>
            
            <Box className={classes.title}>
                <Typography sx={{color:colors.blueGray[300]}} variant="h5" gutterBottom >Rooms</Typography>
                <Box onMouseLeave={()=>setAddMenu(false)}>
                {addMenu?<Fade in={addMenu}>
                    <Box  component={motion.div} 
                        variants={containerVariants}
                        initial='hidden' 
                        animate='visible' 
                        exit='exit' >
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick={()=>setAddRoom(true)}>
                                <Add/>
                            </IconButton >
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick={()=>setEditRoom(true)}>
                                <Edit/>
                            </IconButton>
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick={removeRoom} >
                                <DeleteForever/>
                            </IconButton>
                    </Box>
                </Fade>:
                <IconButton sx={{color:colors.blueGray[300]}} onMouseEnter={()=>setAddMenu(true)}>
                    <MoreVert/>
                </IconButton>}
                </Box>
            </Box>

            <AddRoom addRoom={addRoom} dialogState={addDialog} />
            <EditRoom editRoom={editRoom} dialogState={editDialog} />
            

            <Divider  />
            <List  sx={{bgcolor:cyan[200],m:1,px:1}}>

                <ListItemButton >
                    <ListItemIcon>
                        <Avatar></Avatar>
                    </ListItemIcon>
                    <ListItemText>
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
            <List sx={{bgcolor:teal['A700'],m:1,px:1}}>
                {rooms.map(showRooms)||<div>Loading...</div>}
                        
            </List>
        </Box>
    );

}   
