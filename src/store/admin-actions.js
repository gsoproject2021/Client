import axios from "axios";
import  { adminActions } from "./admin-slice";

export const fetchAllUsers = (token) => {
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

// export const deleteUser = (userId) => {
//         return async (dispatch) => {
//             const deleted = async () => {
//                 const response = await axios.delete(`http://localhost:4000/user?${userId}`);
            
//             if(!response){
//                 throw new Error("something went wrong");
//             }
//         }
//         try{
//             await deleted();
//             dispatch(adminActions.deleteUser(userId))
//         }catch(err){
//             console.log(err);
//         }
//     }
// };

export const fetchAllRooms = (token) => {
    return async (dispatch) => {
        const getRooms = async () => {
            const response = await axios.get('http://localhost:4000/rooms',{headers:{Authorization:`Bearer ${token}`}});

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

export const fetchRoom = (roomId,roomName,token) => {
    return async (dispatch) => {
        const getRoom = async () => {
            const response = await axios.get(`http://localhost:4000/roomDetails/${roomId}`,{headers:{Authorization:`Bearer ${token}`}});
            
            if(!response){
                throw new Error('somthing went wrong');
            }
            const data = response.data;
            return data;
        }

        try{
            let temp = await getRoom();
            let room = {...temp,roomName,roomId}
            dispatch(adminActions.loadManagedRoom(room));
        }catch(err){
            console.log(err);
        }
    }
};

export const updateUserByAdmin = (token,data) => {
    return async (dispatch) => {
        const updateUser = async () => {
            const response = axios.patch("http://localhost:4000/updateUserByAdmin",{data},{headers:{Authorization:`Bearer ${token}`}});
            if(!response){
                throw new Error("somethig went wrong user didn't updated");
            }

            const user = response.data;
            return user;
        }
        try{
            const updatedUser = await updateUser();
            dispatch(adminActions.loadManagedRoom(updatedUser.data));
        }
        catch(err){
            console.log(err);
        }
    }
};

export const changePasswordByAdmin = (token,data,userId) => {
    let {password,confirmPassword} = data;
    return async (dispatch) => {
        const updatePass = async () => {
            const response = await axios.patch("http://localhost:4000/changePasswordByAdmin/",{password,confirmPassword,userId},{headers:{Authorization:`Bearer ${token}`}});

            if(!response){
                throw new Error("something went wrong can't change password")
            }
            const result = response.data;
            return result;
        }
        try{
            const msg = await updatePass();
        }
        catch(err){
            console.log(err);
        }
    }
}

export const deleteUser = (token,userId) => {
    console.log(token,userId)
    return async (dispatch) => {
        const deleteAccount = async () => {
            const response = await axios.delete(`http://localhost:4000/user/${userId}`,{headers:{Authorization:`Bearer ${token}`}})
            if(!response) {
                throw new Error("something went wrong can't delete account");
            }
            const data = response.data;
            return data;
        }
        try{
            const msg = await deleteAccount();
            dispatch(adminActions.deleteUser(userId));
        }
        catch(err){
            console.log(err);
        }
    }
}

export const blockUser = (token,userId,isBlocked) => {
    return async (dispatch) => {
        const block = async () => {
            const response = await axios.patch('http://localhost:4000/blockUser',{userId,isBlocked},{headers:{Authorization:`Bearer ${token}`}});

            if(!response){
                throw new Error("something went wrong user status didn't changed");
            }
            const data = response.data;
            return data;
        }
        try{
            const userData = await block();
            dispatch(adminActions.loadManagedUser(userData.data))
        }
        catch(err){
            console.log(err);
        }
    }
}