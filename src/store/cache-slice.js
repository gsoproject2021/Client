import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
    name:'cache',
    initialState:{cache:[], currentRoom: {roomId:0,roomName:"",users:[],events:[]}},
    reducers:{
        addToCache(state,action){
            state.cache = [...state.cache,action.payload];
        },

        deleteFromCache(state,action){
            state.cache = state.cache.filter(room => room.roomId !== action.payload.roomId);
        },

        updateCache(state,action){
            
            for(let i = 0; i<state.cache.length; i++){
                if(state.cache[i].roomId === action.payload.roomId){
                    state.cache[i] = action.payload;
                } 
            }
        },

        currentRoom(state,action){
            state.currentRoom.roomId = action.payload.roomId ;
            state.currentRoom.roomName = action.payload.roomName;
            state.currentRoom.users = action.payload.users;
            state.currentRoom.events = action.payload.events;
        },

        removeUser(state,action){
            state.currentRoom.users = state.currentRoom.users.filter(user => user.userId !== action);
        },

        addEvent(state,action){
            state.currentRoom.events = [...state.currentRoom.events,action.payload]
        },

        updateEvent(state,action){
           const eventIndex = state.currentRoom.events.findIndex(event => event.eventId === action.payload.eventId);
           state.currentRoom.events[eventIndex] = action.payload;
        },

        removeEventById(state,action){
            state.currentRoom.events = state.currentRoom.events.filter(event => event.eventId !== action.payload)
        }
    }
});

export const cacheActions = cacheSlice.actions;

export default cacheSlice;