import { useState,useRef } from "react";

import { Grid, ListItem, StylesProvider, Typography,List,ListItemIcon,ListItemAvatar,Avatar,Paper, Box, TextField, Button, IconButton} from "@material-ui/core";
import { GroupAddOutlined, PeopleAltOutlined, Remove,Add,Edit } from "@material-ui/icons";
import Room from "./Room";


import React from "react";
import ActionMenu from "../ActionMenu";
const ROOMS = [
    {
        id:'1',
        roomName:'Sport1',
        members:[],
        events:[]
    },
    {
        id:'2',
        roomName:'Food',
        members:[],
        events:[]
    },
    {
        id:'3',
        roomName:'Parties',
        members:[],
        events:[]
    },
    {
        id:'4',
        roomName:'Bla Bla',
        members:[],
        events:[]
    },
    {
        id:'5',
        roomName:'Sport',
        members:[],
        events:[]
    },
    {
        id:'6',
        roomName:'Food',
        members:[],
        events:[]
    },
    {
        id:'7',
        roomName:'Parties',
        members:[],
        events:[]
    },
    {
        id:'8',
        roomName:'Bla Bla Bla',
        members:[],
        events:[]
    }

    
]
function Rooms(props){
 
    const [rooms,setRooms] = useState(ROOMS);
    const [room,setRoom] = useState('');
    const [inputState,setInputState] = useState(false);
    const [selectedState,setSelectedState] = useState(false);
    const [newRoom,setNewRoom] = useState({id:0,roomName:"",members:[],events:[]})
    

    
    const getRoomName = (roomname)=>{
        setRoom(roomname);
    }
    // const updateSelected = (status)=>{

    //     if(!status){
    //         setSelectedState(true);
    //     }
    //     else{
    //         setSelectedState(false);
    //     }
    // }

    const addNewRoom = (rName)=>{
        console.log(rName);
        setNewRoom({id:rooms.length,roomName:"",members:[],events:[]});
        setNewRoom(newRoom.roomName=rName);
        setRooms([...rooms,newRoom]);
        setNewRoom({id:0,roomName:"",members:[],events:[]});
    }

    const updateRoom = (updatedName)=>{

        const updated = rooms.map(roomObj =>{
            if(room===roomObj.roomName){
                return {...roomObj,roomName:updatedName}           
            }
            return roomObj;
        });
        setRooms(updated);
    }



    const deleteRoom = ()=>{
        setRooms(rooms.filter(roomObj => roomObj.roomName !== room));
    }


    const showRooms = (room) =>{
        return <Room key={room.id} roomName={room.roomName} getRoomName={getRoomName} /> 
    }

    return(
            
        <StylesProvider injectFirst>
            <Box className="h-96  my-3 mx-2">
                <Box className="flex justify-between bg-blue-100 mb-3 mx-3 rounded-2xl ">
                <ActionMenu addRoom={addNewRoom} updateRoom={updateRoom} deleteRoom={deleteRoom} prevName={room} />
                </Box>
                <Paper className="border-2 border-gray-200 h-80 bg-gray-600 overflow-y-auto" >
                        <List className="overflow-y-auto h-72 border-2 shadow-inner mx-3 h-84 rounded bg-white overflow-y-auto my-3" >
                            {rooms.map(showRooms)}
                        </List>
                </Paper>
            </Box>
        </StylesProvider>
    
    );
}
export default Rooms;