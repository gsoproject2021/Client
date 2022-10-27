import axios from 'axios';
import {cacheActions} from './cache-slice';
import { roomsActions } from './room-slice';
import { userActions } from './user-slice';



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
            const response = await axios.post(`http://localhost:4000/roomUser/${currentRoom.roomId}`,{users:users,roomId:currentRoom.roomId,existedRoom:currentRoom.roomName},{headers:{Authorization:`Bearer ${token}`}});
        
            if(!response){
                throw new Error("user didn't add to room");
            }
            const data = response.data;
            return data;
        }
        try{
            
            const addedUsers = await addToRoom();
            console.log(addedUsers)
            if(typeof addedUsers === 'string'){
                dispatch(userActions.setMessage(addedUsers));
            }
            else{
                dispatch(roomsActions.addUser(addedUsers));
            }
        }catch(err){
            console.log(err);
        }
    }
    
};
export const removeUserFromRoom = (userId,currentRoom,myUserId,token) => {
    
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
            if(typeof message === 'string'){
                dispatch(userActions.setMessage(message));
            }
            let roomId = currentRoom.roomId;
            let data = {userId,roomId,myUserId}
            dispatch(roomsActions.removeUser(data));
        }catch(err){
            console.log(err);
        }
    }
};
export const createEvent = (currentRoom,eventDetails,token) => {
    let subject = eventDetails.eventSubject;
    let date= eventDetails.eventDate;
    let description = eventDetails.eventDescription;
    
    return async (dispatch) => {
        const newEvent = async () => {
            const response = await axios.post('http://localhost:4000/event',{roomId:currentRoom.roomId,subject,date,description},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("event didn't created");
            }
            const data = response.data;
            return data;
        } 
        try{
            const event = await newEvent();
            if(typeof event === 'string'){
                dispatch(userActions.setMessage(event))
            }
            // }else{
            //     dispatch(roomsActions.addEvent(event));
            // }
        }catch(err){
            console.log(err);
        }

    } 
};
export const removeEvent = (eventId,roomId,token) => {
    
    return async (dispatch) => {
        const deleteEvent = async () => {
            const response = await axios.delete(`http://localhost:4000/event/`,{data:{roomId:roomId,eventId:eventId},headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("Room didn't deleted");
            }
            const data = response.data;
            return data;
       }
       try{
           const deleted = await deleteEvent();
           if(typeof deleted === 'string'){
            dispatch(userActions.setMessage(deleted));
           }
           dispatch(roomsActions.deleteEvent({eventId,roomId}));
       }catch(err){
           console.log(err);
       }
    }
};
export const updateEventDetails = (event,roomId,token) => {
    let subject = event.eventSubject;
    let date = event.eventDate;
    let description = event.eventDescription;
    let eventId = event.eventId;   
    return async (dispatch) => {
        const editEvent = async () =>{
        const response = await axios.patch('http://localhost:4000/event/',{eventId,subject,date,description,roomId:roomId},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("event didn't updated");
            }
            const data = response.data;
            return data;
        }
        try{
            const updatedEvent = await editEvent();
            console.log(updatedEvent);
            if(typeof updatedEvent === 'string'){
                dispatch(userActions.setMessage(updatedEvent))
            }else{
                dispatch(roomsActions.updateEvent(updatedEvent));
            }
        }catch(err){
            console.log(err);
        }
    }
};




 