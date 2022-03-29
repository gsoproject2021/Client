import axios from 'axios';
import {cacheActions} from './cache-slice';



export const fetchRoomDetails = (roomId,roomName,token) => {
    return async(dispatch)=>{
        const getDetails = async ()=>{
            const response = await axios.get(`http://localhost:4000/roomDetails/${roomId}`,{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("can't fetch data");
            }
            const data = response.data;
            return data;
        }
        try{
            const roomData = await getDetails();
            const data = {roomId:roomId,roomName:roomName,users:roomData.users,events:roomData.events};
            console.log(data);
            dispatch(cacheActions.currentRoom(data));
            dispatch(cacheActions.addToCache(data));
            
        }catch(err){
            console.log(err);
        }
    }
};
export const addUsersToRoom = (users,currentRoom,token) => {
    return async (dispatch)=>{
        const addToRoom = async ()=>{
            const response = await axios.post(`http://localhost:4000/roomUser/${currentRoom.roomId}`,{users:users,roomId:currentRoom.roomId},{headers:{Authorization:`Bearer ${token}`}});
        
            if(!response){
                throw new Error("user didn't add to room");
            }
            const data = response.data;
            return data;
        }
        try{
            
            const addedUsers = await addToRoom();
            
            const currentData = {roomId:currentRoom.roomId,roomName:currentRoom.roomName,events:currentRoom.events,users:addedUsers};
            dispatch(cacheActions.currentRoom(currentData));
            dispatch(cacheActions.updateCache(currentData));
        }catch(err){
            console.log(err);
        }
    }
    
};
export const removeUserFromRoom = (userId,currentRoom,token) => {
    return async (dispatch) => {
        const deleteUser = async ()=>{
            const response = axios.delete(`http://localhost:4000/roomUser`,{data:{userId:userId,roomId:currentRoom.roomId},headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("Room didn't deleted");
            }
            const data = response.data;
            return data;
        }
        try{
            const message = await deleteUser();
            console.log(message);
            const users = currentRoom.users;
            const data = users.filter(user => user.UserID !== userId);
            const currentData = {roomId:currentRoom.roomId,roomName:currentRoom.roomName,events:currentRoom.events,users:data};
            dispatch(cacheActions.currentRoom(currentData));
            dispatch(cacheActions.updateCache(currentData));
        }catch(err){
            console.log(err);
        }
    }
};

export const changeAdminState = (userId,isAdmin,currentRoom,token) => {
    return async (dispatch) =>{
        const change = async ()=>{
            const response = axios.put(`http://localhost:4000/roomUser`,{roomId:currentRoom.roomId,userId:userId,idAdmin:isAdmin},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("something went wrong");
            }
            const data = response.data;
            return data;
        }
        try{
            const data = await change();
            let users = currentRoom.users;
            for(let i = 0; i < users; i++){
                if(users[i] === userId){
                    users[i].isAdmin = data.isAdmin;
                }
            }
            const currentData = {roomId:currentRoom.roomId,roomName:currentRoom.roomName,events:currentRoom.events,users:users};
            dispatch(cacheActions.currentRoom(currentData));
            dispatch(cacheActions.updateCache(currentData));

        }catch(err){
            console.log(err);
        }
    }
};

export const createEvent = (currentRoom,eventDetails,token) => {
    
    return async (dispatch) => {
        const newEvent = async () => {
            const response = await axios.post('http://localhost:4000/event',{roomId:currentRoom.roomId,event:eventDetails},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("event didn't created");
            }
            const data = response.data;
            return data;
        } 
        try{
            const event = await newEvent();
            console.log(event);
            dispatch(cacheActions.addEvent(event));
        }catch(err){
            console.log(err);
        }

    } 
};

export const removeEvent = (roomId,eventId,token) => {
    return async (dispatch) => {
        const deleteEvent = async () => {
            const response = await axios.delete(`http://localhost:4000/event/${eventId}`,{roomId:roomId},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("Room didn't deleted");
            }
       }
       try{
           await deleteEvent();
           dispatch(cacheActions.removeEventById(eventId));
       }catch(err){
           console.log(err);
       }
    }
};

export const updateEventDetails = (event,roomId,token) => {
    console.log(event);
    return async (dispatch) => {
        const editEvent = async () =>{
        const response = await axios.put('http://localhost:4000/event',{eventId:event.eventId,subject:event.subject,eventDate:event.date,description:event.description,roomId:roomId});
            if(!response){
                throw new Error("event didn't updated");
            }
            const data = response.data;
            return data;
        }
        try{
            const updatedEvent = await editEvent();
            dispatch(cacheActions.updateEvent(updatedEvent));
        }catch(err){
            console.log(err);
        }
    }
}




 