import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    name: 'admin',
    initialState:{users:[],rooms:[],publicRooms:[],managedUser:{userId:0},managedRoom:{}},
    reducers:{

        loadUsers(state,action){
            state.users = action.payload;
        },

        updateUser(state,action){
            const index = state.users.findIndex(user => user.userId === action.payload.userId);
            state.users[index] = action.payload;
        },

        deleteUser(state,action){
            state.users = state.users.filter(user => user.userId !== action.payload);
        },

        loadRooms(state,action){
            state.rooms = action.payload;
        },

        updateRoom(state,action){
            const index = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            state.rooms[index] = action.payload;
        },

        deleteRoom(state,action){
            state.rooms = state.rooms.filter(room => room.roomId !== action.payload);
        },

        loadPublicRooms(state,action){
            state.publicRooms = action.payload;
        },

        addPublicRoom(state,action){
            state.publicRooms = [...state.publicRooms,action.payload];
        },

        updatePublicRoom(state,action){
            const index = state.publicRooms.findIndex(room => room.roomId === action.payload.roomId);
            state.publicRooms[index] = action.payload;
        },

        deletePublicRoom(state,action){
            state.publicRooms = state.publicRooms.filter(room => room.roomId !== action.payload);
        },

        loadManagedUser(state,action){
            state.managedUser = action.payload;
        },

        loadManagedRoom(state,action){
            state.managedRoom = action.payload;
        }

    }
});

export const adminActions = adminSlice.actions;

export default adminSlice;