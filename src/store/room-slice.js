import {createSlice} from '@reduxjs/toolkit';

const roomsSlice = createSlice({
    name:'rooms',
    initialState:{rooms:[],currentRoom:{roomId:0,users:[],events:[],messages:[],image:''}},
    reducers:{
        loadRooms(state,action){
            state.rooms = action.payload;
            if(state.rooms.length>0){
                state.currentRoom = state.rooms[0];
            }
        },

        setCurrentRoom(state,action){
            let roomIndex  = state.rooms.findIndex(room => room.roomId === action.payload);
            state.currentRoom = state.rooms[roomIndex];
        },

        addRoom(state,action){
            let isExist = state.rooms.find(room => room.roomId === action.payload.roomId);
            console.log(1);
            if(isExist){
                let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
                state.rooms[roomIndex] = action.payload;
                if(state.currentRoom.roomId === action.payload.roomId){
                    state.currentRoom = action.payload;
                };
                console.log(2)
            }else{
                state.rooms = [...state.rooms,action.payload];
                if(state.rooms.length === 1){
                    state.currentRoom = action.payload;
                }
                console.log(3)
            }
            
        },

        deleteRoom(state,action){
            
            state.rooms = state.rooms.filter(room => room.roomId !== action.payload);
            if(state.rooms.length === 0){
                state.currentRoom = {roomId:0,users:[],events:[],messages:[]};
            }
            if(state.currentRoom.roomId === action.payload){
                state.currentRoom = state.rooms[0];
            }
        },

        updateRoom(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            console.log(action.payload);
            state.rooms[roomIndex].roomName = action.payload.roomName;
            if(state.currentRoom.roomId === action.payload.roomId){
                state.currentRoom.roomName = action.payload.roomName;
            }
        },

        addUser(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === state.currentRoom.roomId);
            state.rooms[roomIndex] = action.payload;
            state.currentRoom = action.payload;
        },

        removeUser(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            if(roomIndex){
                state.rooms[roomIndex].users = state.rooms[roomIndex].users.filter(user => user.userId !== action.payload.userId);
            }
            if(action.payload.roomId === state.currentRoom.roomId){
                state.currentRoom.users = state.currentRoom.users.filter(user => user.userId !== action.payload.userId);
            }
            
        },

        addEvent(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            
            let event = {
                eventId:action.payload.eventId,
                subject:action.payload.subject,
                date:action.payload.date,
                hour:action.payload.hour,
                description:action.payload.description
            }

            if(state.currentRoom.roomId === action.payload.roomId){
                state.currentRoom.events = [...state.currentRoom.events,event];
            }
            state.rooms[roomIndex].events = [...state.rooms[roomIndex].events,event]
            
        },

        updateEvent(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            let eventIndex = state.rooms[roomIndex].events.findIndex(event => event.eventId === action.payload.eventId);
            let event = {
                eventId:action.payload.eventId,
                subject:action.payload.subject,
                date:action.payload.date,
                hour:action.payload.hour,
                description:action.payload.description
            }
            state.rooms[roomIndex].events[eventIndex] = event;
            if(state.currentRoom.roomId === action.payload.roomId){
                state.currentRoom.events[eventIndex] = event;
            }
        },

        deleteEvent(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            console.log(action.payload);
            state.rooms[roomIndex].events = state.rooms[roomIndex].events.filter(event => event.eventId !== action.payload.eventId);
            state.currentRoom.events = state.currentRoom.events.filter(event => event.eventId !== action.payload.eventId);
        },

        updateBySocket(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === state.currentRoom.roomId);
            state.rooms[roomIndex] = action.payload;
            if(state.currentRoom.roomId === action.payload.roomId){
                state.currentRoom = action.payload;
            }
        },

        removeCurrentRoomBySocket(state,action){
            if(state.rooms.length === 0 ){
                state.currentRoom = {roomId:0,users:[],events:[],messages:[]};
            }
            state.currentRoom = state.rooms[0];
            state.rooms = state.rooms.filter(room => room.roomId !== action.payload.roomId);
        },

        uploadImage(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            state.rooms[roomIndex].image = action.payload.image; 
        },

        isUserOnline(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            let userIndex = state.rooms[roomIndex].users.findIndex(user => user.userId === action.payload.userId);
            state.rooms[roomIndex].users[userIndex].isOnline = action.payload.isOnline;

            if(state.currentRoom.roomId === action.payload.roomId){
                state.currentRoom.users[userIndex].isOnline = action.payload.isOnline;
            }
        }


    }
})

export const roomsActions = roomsSlice.actions;

export default roomsSlice