import {createSlice} from '@reduxjs/toolkit';

const roomsSlice = createSlice({
    name:'rooms',
    initialState:{rooms:[]},
    reducers:{
        loadRooms(state,action){
            state.rooms = action.payload;
        },
        addRoom(state,action){
            
            state.rooms = [...state.rooms,action.payload];
            console.log(state.rooms);
        },

        deleteRoom(state,action){
            state.rooms = state.rooms.filter(room => room.id !== action.payload);
        },

        updateRoom(state,action){
            for(let i = 0;i<state.rooms.length;i++){
                if(state.rooms[i].id === action.payload.id){
                    state.rooms[i].roomName = action.payload.roomName;
                }
            }
        },
        
    }
})

export const roomsActions = roomsSlice.actions;

export default roomsSlice