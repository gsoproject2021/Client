import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import {  StylesProvider, List,Paper, Box} from "@material-ui/core";

import Room from "./Room";


import React from "react";
import ActionMenu from "../ActionMenu";
import {roomsDataAction} from "../store/roomsData";

function Rooms(){

    const dispatch = useDispatch();
    const rooms = useSelector((state) => state.rooms.rooms);

    
    const [room,setRoom] = useState('');
    
    const getRoomName = (roomname)=>{
        setRoom(roomname);
        dispatch(roomsDataAction.setCurrentRoom(roomname));
    }

    const addNewRoom = (roomName)=>{
        dispatch(roomsDataAction.createRoom(roomName));
    }

    const updateRoom = (updatedName)=>{
        dispatch(roomsDataAction.editRoom([room,updatedName]));
    }

    const deleteRoom = ()=>{
        dispatch(roomsDataAction.deleteRoom(room));
    }

    const showRooms = (room) =>{
        return <Room key={room.id} roomName={room.roomName} getRoomName={getRoomName} /> 
    }

    return(
            
        <StylesProvider injectFirst>
            <Box className="h-full  ">
                <Box className="flex justify-between   bg-gray-700 py-3 px-2 ">
                    <ActionMenu addRoom={addNewRoom} updateRoom={updateRoom} deleteRoom={deleteRoom} prevName={room} />
                </Box>
                <Box component="div" overflow="auto" className="px-2 space-y-2 overflow-y-auto h-96" >
                        <List className=" space-y-2 overflow-y-auto divide-opacity-20 divide-gray-300" >
                            {rooms.map(showRooms)}
                        </List>
                </Box>
            </Box>
        </StylesProvider>
    
    );
}
export default Rooms;
// updateRoom={updateRoom} deleteRoom={deleteRoom}