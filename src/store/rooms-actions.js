import { roomsActions } from "./room-slice";

import axios from "axios";

import { userActions } from "./user-slice";

export const fetchRoomsData = (userId,token) =>{
    return async (dispatch)=>{
        const fetchRooms = async () =>{
            
            const response = await axios.get(`http://localhost:4000/roomUser/${userId}`,{headers:{Authorization:`Bearer ${token}`}});
            
            if(!response){
                throw new Error("something went wrong");
            }

            const data = response.data;

            return data;
        
        };
        try{
            const roomsData = await fetchRooms();
            dispatch(roomsActions.loadRooms({roomsData,userId}));
        }catch(error){
            console.log(error);
        }
    };
};

export const createRoom = (roomName,token) =>{
    
    return async (dispatch)=>{
        const addRoom = async ()=>{
            const response = await axios.post('http://localhost:4000/room',{roomName:roomName},{headers:{Authorization:`Bearer ${token}`}});
        
            if(!response){
                throw new Error("Room didn't created");
            }
            const data = response.data;
            return data;
        };
        try{
            const newRoom = await addRoom();
            if(typeof newRoom === 'string'){
                dispatch(userActions.setMessage(newRoom))
            }else{
                dispatch(roomsActions.addRoom(newRoom));
            }
        }catch(err){
            console.log(err);
        }
    }
};

export const deleteRoom = (roomId,users,token)=>{
    return async (dispatch)=>{
        const removeRoom = async ()=>{
            const response = await axios.delete(`http://localhost:4000/room/${roomId}`,{data:{users:users},headers:{Authorization:`Bearer ${token}` }});
            if(!response){
                throw new Error("Room didn't deleted");
            }     
        }
        try{
            const msg = await removeRoom();
            if(typeof msg === 'string'){
                dispatch(userActions.setMessage(msg))
            }
            dispatch(roomsActions.deleteRoom(roomId));

        }catch(err){
            console.log(err);
        }
    }
};

export const updateRoom = (roomId,roomName,token) => {
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
            if(typeof updated === 'string'){
                dispatch(userActions.setMessage(updated));
            }
            else{
                dispatch(roomsActions.updateRoom(updated));
            }
        }catch(err){
            console.log(err);
        }
    }
};

export const uploadRoomPicture = (token,roomId,image) => {
    
    return async (dispatch) =>  {
        const roomPic = async () => {
            let formData = new FormData();
            formData.append('image',image);
            formData.append('roomId',roomId)
            const response = await axios.post('http://localhost:4000/roomImage',formData,{headers:{Authorization:`Bearer ${token}`}});

            const data = response.data;

            return data;
        }

        try{
            const data = await roomPic();
            
            dispatch(roomsActions.uploadImage(data));


        }catch(err){
            console.log(err);
        }
    }
}

export const addPublicRoom = (token,newRoom) => {
    let {roomName} = newRoom;
    return async (dispatch) => {
        const addPublic = async () => {
            const response = await axios.post("http://localhost:4000/publicRooms/",{roomName},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("something went wrong room didn't created");
            }
            const data = response.data;
            return data;
        }
        try{
            const room = await addPublic();
            console.log(room)
            dispatch(roomsActions.addPublicRoom(room.room));
        }
        catch(err){
            console.log(err);
        }
    }
}

export const updatePublicRoom = (token,roomName,roomId) => {
    return async (dispatch) => {
        const updatePublic = async () => {
            const response = await axios.patch("http://localhost:4000/publicRooms/",{roomName,roomId},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("something went wrong room didn't updated");
            }
            const data = response.data;
            return data;
        }
        try{
            const room = await updatePublic();
            console.log(room)
            dispatch(roomsActions.updatePublicRooms(room.room));
        }
        catch(err){
            console.log(err);
        }
    }
}

export const deletePublicRoom = (token,roomId) => {
    return async (dispatch) => {
        const deletePublic = async () => {
            const response = await axios.delete(`http://localhost:4000/publicRooms/${roomId}`,{headers:{Authorization:`Bearer ${token}`}})
            
            if(!response){
                throw new Error("somehitng went wrong room didnt deleted");
            }
            const data = response.data;
            return data;
        }
        try{
            const deleted = deletePublic();
            if(deleted.message === "room deleted"){
                dispatch(roomsActions.deletePublicRoom(roomId));
                
            }
        }
        catch(err){
            console.log(err);
        }

    }
}
// export const addEvent = (socket,id) => {
//     console.log(socket,id);
//     return async (dispatch) => {
//         const newEvent = async () => {
//             let temp;
//             socket.on(`event_room_${id}`, data => {
//                 if(data.action === 'create_event'){
//                     temp = data;
//                 }
//             })
//             dispatch(roomsActions.addEvent(temp));

//         }

//         try{
//             await newEvent();

//         }catch(err){
//             console.log(err);
//         }
//     }
// }