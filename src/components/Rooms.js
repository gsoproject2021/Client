import { Edit, MoreVert,Add, DeleteForever } from "@mui/icons-material";
import {Box, Divider, Typography,List,Menu, ListItemButton, ListItemIcon, Avatar, ListItemText, IconButton, Fade, Dialog, DialogTitle, DialogContent, TextField, Button} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState,useEffect, useContext } from "react";
import {motion} from 'framer-motion/dist/framer-motion';
import colors from "../utils/colors";
import {cyan,teal} from '@mui/material/colors';
import Room from "./Room";
import axios from "axios";
import AddRoom from "./AddRoom";
import RoomsContext from '../store/rooms-context';
import EditRoom from "./EditRoom";


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
    const roomsCtx = useContext(RoomsContext);

    const classes = useStyles();
    const [addMenu,setAddMenu] = useState(false);
    const [addRoom,setAddRoom] = useState(false);
    const [editRoom,setEditRoom] = useState(false);
    const [selectedRoomName,setSelectedRoomName] = useState('');
    const [selectedRoomId,setSelectedRoomId] = useState();
    const [newRoomName,setNewRoomName] = useState('');
    

    const getName = (roomId,roomName)=>{
        setSelectedRoomName(roomName);
        setSelectedRoomId(roomId);
        console.log(selectedRoomId,selectedRoomName);
    }
    const userId =2;
    const [data,setData] = useState([]);
    const [reqStatus,setReqStatus] = useState(null);

    // useEffect(()=>{
    //     roomsCtx.getRooms(userId);
        
    // },[]);
    
    
    // const {mutateAsync,isLoading} = useMutation( selectedRoomId =>{
    //     return axios.delete(`http://localhost:4000/rooms?roomId=${selectedRoomId}`)
    // });
    // const deleteRoom = ()=>{ axios.delete(`http://localhost:4000/rooms?roomId=${selectedRoomId}`).then(res=>{
    //     console.log(res)

    //     }).catch(err=>console.log(err));
    // }
    const deleteRoom = ()=>{
        roomsCtx.deleteRoom();
    }
    // const {data,status,error}= useQuery('rooms', ()=>{
    //     fetch(`http://localhost:4000/rooms?userId=${userId}`).then((res)=> res.json());
    // });
    // const {status,data} = useQuery('rooms', async ()=> {const res = await axios.get(`http://localhost:4000/rooms?userId=${userId}`)
    // return res.data})

    // const {status,data,isFetched} = useQuery(['rooms',{userId}],async ()=>{const res = await axios.get(`http://localhost:4000/rooms?userId=${userId}`)  
    // return res.data});
    
    // const addRoomMutation = useMutation(newRoomName =>{
    //     return axios.post('http://localhost:4000/rooms',newRoomName)
    // });

    // const deleteRoom = async ()=>{
    //     await mutateAsync(selectedRoomId)
    //     queryClient.invalidateQueries('rooms')
    // }

    const createRoom = ()=>{

    }

    // if (status === 'loading') {
    //     return <span>Loading...</span>
    //   }
    
    //   if (status === 'error') {
    //     return <span>Error: {error.message}</span>
    //   }
    
    
    
    // const { data=[],isFetching,isLoading } = useGetRoomsQuery(2);
    // const [addNewRoom,{isError}] = useAddRoomMutation();
    
    // const handleAddRoom = async()=>{
    //     if(newRoomName){
    //         // try{
    //             await addNewRoom({id:2,roomName:newRoomName}).unwrap();
    //             setNewRoomName('');
    //             setAddRoom(false);
    //             console.log(addRoom);
    //         // }catch{
    //         //     console.log('faild');
    //         // }
    //         console.log(data);
    //     }
    //     console.log(data);
    // }
    
    const showRooms = (room)=>{
      return  <Room key={room.roomId} roomName={room.roomName} id={room.roomId} />
    }
    const addDialog = (addStatus)=>{
        setAddRoom(addStatus);
        
    }

    const editDialog = (editStatus)=>{
        setEditRoom(editStatus);
    }
    
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
                            <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick={roomsCtx.deleteRoom} >
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
                {roomsCtx.rooms.map(showRooms)}
                        
            </List>
        </Box>
    );

}   
