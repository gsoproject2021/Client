import { roomsActions } from "./room-slice";

import axios from "axios";
import { cacheActions } from "./cache-slice";

export const fetchRoomsData = (userId,token) =>{
    return async (dispatch)=>{
        const fetchRooms = async () =>{
            console.log(userId);
            const response = await axios.get(`http://localhost:4000/roomUser/${userId}`,{headers:{Authorization:`Bearer ${token}`}});
            
            if(!response){
                throw new Error("somthing went wrong");
            }

            const data = await response.data;

            return data;
        
        };
        try{
            const roomsData = await fetchRooms();
            console.log(roomsData);
            dispatch(roomsActions.loadRooms(roomsData));
        }catch(error){
            console.log(error);
        }
    };
};

export const createRoom = (roomName,token) =>{
    const userId = 9;
    return async (dispatch)=>{
        const addRoom = async ()=>{
            const response = await axios.post('http://localhost:4000/room',{userId:userId,roomName:roomName},{headers:{Authorization:`Bearer ${token}`}});
        
            if(!response){
                throw new Error("Room didn't created");
            }
            const data = response.data;
            return data;
        };
        try{
            const newRoom = await addRoom();
            console.log(newRoom);
            dispatch(roomsActions.addRoom(newRoom));
        }catch(err){
            console.log(err);
        }
    }
};
export const deleteRoom = (roomId,token)=>{
    return async (dispatch)=>{
        const removeRoom = async ()=>{
            const response = await axios.delete(`http://localhost:4000/room/${roomId}`,{headers:{Authorization:`Bearer ${token}` }});
            if(!response){
                throw new Error("Room didn't deleted");
            }     
        }
        try{
            await removeRoom();
            dispatch(roomsActions.deleteRoom(roomId));
            dispatch(cacheActions.currentRoom({roomId:0,roomName:"",users:[],events:[]}));
            dispatch(cacheActions.deleteFromCache(roomId));

        }catch(err){
            console.log(err);
        }
    }
}
export const updateRoom = (roomId,roomName,token) => {
    console.log(roomId,roomName,token);
    return async (dispatch)=>{
        const editRoom = async ()=>{
            const response = await axios.put('http://localhost:4000/room',{roomId:roomId,roomName:roomName},{headers:{Authorization:`Bearer ${token}` }});
            if(!response){
                throw new Error("Room didn't updated");
            }
            const data = response.data;
            return data;
        }
        try{
            const updated = await editRoom();
            dispatch(roomsActions.updateRoom(updated));
        }catch(err){
            console.log(err);
        }
    }
};