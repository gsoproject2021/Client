import { roomsActions } from "./room-slice";

import axios from "axios";
import { cacheActions } from "./cache-slice";

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
            console.log(newRoom);
            dispatch(roomsActions.addRoom(newRoom));
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
            await removeRoom();

            dispatch(roomsActions.deleteRoom(roomId));

        }catch(err){
            console.log(err);
        }
    }
}
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
            dispatch(roomsActions.updateRoom(updated));;
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