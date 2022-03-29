import axios from "axios";
import  { adminActions } from "./admin-slice";

export const fetchAllUsers = () => {
    return async (dispatch) => {
        const getUsers = async () => {
            const response = await axios.get('http://localhost:4000/users');
            if(!response){
                throw new Error("cant fetch users");
            }
            const data = response.data;
            return data;
        }

        try{
            const users = await getUsers();
            
            dispatch(adminActions.loadUsers(users));
        }catch(err){
            console.log(err);
        }
    }
};

export const updateUser = (user) => {
    return async (dispatch) =>{
        const updatedUser = async () => {
            const response = await axios.put('http://localhost:4000/user',{user:user});
            if(!response){
                throw new Error("user didnt updated");
            }
            const data = response.data;
            return data;
        }

        try{
            const user = await updatedUser();
            dispatch(adminActions.updateUser(user));
        }catch(err){
            console.log(err);
        }
    }
};

export const deleteUser = (userId) => {
        return async (dispatch) => {
            const deleted = async () => {
                const response = await axios.delete(`http://localhost:4000/user?${userId}`);
            
            if(!response){
                throw new Error("something went wrong");
            }
        }
        try{
            await deleted();
            dispatch(adminActions.deleteUser(userId))
        }catch(err){
            console.log(err);
        }
    }
};

export const fetchAllRooms = () => {
    return async (dispatch) => {
        const getRooms = async () => {
            const response = await axios.get('http://localhost:4000/rooms');

            if(!response){
                throw new Error('something went wrong');
            }
            const data = response.data;
            return data;
        }

        try{
            const rooms = await getRooms();
            console.log(rooms);
            dispatch(adminActions.loadRooms(rooms));
        }catch(err){
            console.log(err);
        }
    }
};

export const updateRoom = (room) => {
    return async (dispatch) => {
        const updatedRoom = async () => {
            const response = await axios.put('http://localhost:4000/room',{room:room});

            if(!response){
                throw new Error("something went wrong");
            }

            const data = response.data;
            return data;
        }
        try{
            const updated = updatedRoom();
            dispatch(adminActions.updateRoom(updated));
        }catch(err){
            console.log(err);
        }
    }
};

export const deleteRoom = (roomId) => {
    return async (dispatch) => {
        const deleted = async () => {
            const response = await axios.delete(`http://localhost:4000/room?${roomId}`);
            
            if(!response){
                throw new Error('something went wrong');
            }
        }

        try{
            await deleted();
            dispatch(adminActions.deleteRoom(roomId));
        }catch(err){
            console.log(err);
        }
    }
};

export const fetchPublicRooms = () => {
    return async (dispatch) => {
        const publicRooms = async () => {
            const response = await axios.get('http://localhosr:4000/public');

            if(!response){
                throw new Error("something went wrong");
            }
            const data = response.data;
            return data;
        }

        try{

            const Rooms = publicRooms();
            dispatch(adminActions.loadPublicRooms(Rooms));

        }catch(err){
            console.log(err);
        }
    }
};

export const createPublicRoom = (roomName) => {
    return async (dispatch) => {
        const addRoom = async () => {
            const response = await axios.post('http://localhost:4000/public',{roomName:roomName});

            if(!response){
                throw new Error('room didnt created');
            }

            const data = response.data;
            return data;
        }

        try{

            const publicRoom = await addRoom();
            dispatch(adminActions.addPublicRoom(publicRoom));
        }catch(err){
            console.log(err);
        }
    }
};

export const updatePublicRoom = (room) => {
    return async (dispatch) => {
        const updateRoom = async () => {
            const response = axios.put('http://localhost:4000/public',{room:room});

            if(!response){
                throw new Error('room didnt updated');
            }
            const data = response.data;
            return data;
        }

        try{

            const updated = await updateRoom();
            dispatch(adminActions.updatePublicRoom(updated));
        }catch(err){
            console.log(err);
        }
    }
};

export const deletePublicRooms = (roomId) => {
    return async (dispatch) => {
        const deleted = async () => {
            const response = await axios.delete(`http://localhost:4000/public?${roomId}`);

            if(!response){
                throw new Error('room didnt deleted');
            }
        }


        try{

            await deleted();
            dispatch(adminActions.deletePublicRoom(roomId));

        }catch(err){
            console.log(err);
        }
    }
};

export const fetchUser = (userId) => {
    return async (dispatch) => {
        const getUser = async () => {
            const response = await axios.get(`http://localhost:4000/user/${userId}`);

            if(!response){
                throw new Error("something went wrong");
            }
            const data = response.data;
            return data;
        }
        try{
            const user = await getUser();
            dispatch(adminActions.loadManagedUser(user));
        }catch(err){
            console.log(err);
        }
    }
};

export const fetchRoom = (roomId) => {
    return async (dispatch) => {
        const getRoom = async () => {
            const response = await axios.get(`http://localhost:4000/roomDetails/${roomId}`);
            
            if(!response){
                throw new Error('somthing went wrong');
            }
            const data = response.data;
            return data;
        }

        try{
            const room = await getRoom();
            dispatch(adminActions.loadManagedRoom(room));
        }catch(err){
            console.log(err);
        }
    }
}


