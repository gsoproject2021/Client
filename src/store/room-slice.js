import { jssPreset } from '@mui/styles';
import {createSlice} from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

const roomsSlice = createSlice({
    name:'rooms',
    initialState:{publicRooms:[],
                  publicRoomData:{prevRoomId:0,curRoomId:0,prevRoomName:"",curRoomName:""},
                  rooms:[],
                  currentRoom:{roomId:0,users:[],events:[],messages:[],image:'',newMessage:false,type:"private"}},
    reducers:{
        loadRooms(state,action){
              
            state.publicRooms = action.payload.roomsData.publicRooms;
            state.rooms = action.payload.roomsData.rooms;
            if(state.rooms.length>0){
                state.currentRoom = state.rooms[0];
            }
            state.currentRoom.users.forEach(user => {
            if(user.userId === action.payload.userId){
                user.isOnline = true
                }
            })            
            localStorage.setItem('roomsData',JSON.stringify({rooms:state.rooms,publicRooms:state.publicRooms}))
        },

        setCurrentRoom(state,action){
            
            let roomIndex  = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            state.currentRoom = state.rooms[roomIndex];
            state.currentRoom.users.forEach(user => {
                if(user.userId === action.payload.userId){
                    user.isOnline = true
                }
            })
            state.currentRoom.newMessage = false;
        },

        addRoom(state,action){
            let isExist = state.rooms.find(room => room.roomId === action.payload.roomId);
            if(isExist){
                let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
                state.rooms[roomIndex] = action.payload;
                if(state.currentRoom.roomId === action.payload.roomId){
                    state.currentRoom = action.payload;
                };
            }else{
                state.rooms = [...state.rooms,action.payload];
                if(state.rooms.length === 1){
                    state.currentRoom = action.payload;
                }
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
            state.rooms[roomIndex].roomName = action.payload.roomName;
            if(state.currentRoom.roomId === action.payload.roomId){
                state.currentRoom.roomName = action.payload.roomName;
            }
        },

        addUser(state,action){
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            if(roomIndex > -1){
                state.rooms[roomIndex] = action.payload;
            }
            else{
                state.rooms = [...state.rooms,action.payload];
            }
            if(action.payload.roomId === state.currentRoom.roomId || state.rooms.length === 1){
                state.currentRoom = action.payload;
            }


        },

        removeUser(state,action){
            
            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
    
            if(roomIndex > -1){
                state.rooms[roomIndex].users = state.rooms[roomIndex].users.filter(user => user.userId !== action.payload.userId);

            }
            if(action.payload.roomId === state.currentRoom.roomId){
                state.currentRoom.users = state.currentRoom.users.filter(user => user.userId !== action.payload.userId);
            }
            if(action.payload.userId === action.payload.myUserId && action.payload.userId === action.payload.myUserId){
                if(state.rooms.length > 0){
                    state.currentRoom = state.rooms[0];
                    state.rooms = state.rooms.filter(room => room.roomId !== action.payload.roomId)
                }
                else{
                    state.currentRoom = {roomId:0,users:[],events:[],messages:[],image:''}
                }
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
            
            // let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            // let userIndex = state.rooms[roomIndex].users.findIndex(user => user.userId === action.payload.userId);
            // state.rooms[roomIndex].users[userIndex].isOnline = action.payload.isOnline;
            state.rooms.forEach(room => {
                room.users.forEach(user => {
                    if(user.userId === action.payload.userId){
                        user.isOnline = action.payload.isOnline;
                    }
                })
            })

            state.currentRoom.users.forEach(user => {
                if(user.userId === action.payload.userId){
                    user.isOnline = action.payload.isOnline
                }
            })

            // if(state.currentRoom.roomId === action.payload.roomId){
            //     let userI = state.currentRoom.users.findIndex(user => user.userId === action.payload.userId);
            //     state.currentRoom.users[userI].isOnline = action.payload.isOnline;
            // }

        },

        newMessage(state,action){

            let roomIndex = state.rooms.findIndex(room => room.roomId === action.payload.roomId);
            state.rooms[roomIndex].messages = [...state.rooms[roomIndex].messages,action.payload]
            if(state.currentRoom.roomId === action.payload.roomId){
                state.currentRoom.messages = [...state.currentRoom.messages,action.payload];
            }
            if(state.currentRoom.roomId !== action.payload.roomId){
                state.rooms[roomIndex].newMessage = true;
            }
        },

        addPublicRoom(state,action){
            state.publicRooms = [...state.publicRooms,action.payload];
        },

        updatePublicRooms(state,action){
            const index = state.publicRooms.findIndex(room => room.roomId === action.payload.roomId);
            state.publicRooms[index] = action.payload;
        },

        deletePublicRoom(state,action){
            state.publicRooms = state.publicRooms.filter(room => room.roomId !== action.payload);
        },

        setCurrentPublicRoom(state,action){
            state.currentRoom = {roomId:action.payload.roomId,roomName:action.payload.roomName,users:action.payload.users,events:[],messages:[],image:'',type:"public"}
        },

        setPublicRoomData(state,action){
            console.log(action.payload)
            state.publicRoomData.prevRoomId = state.publicRoomData.curRoomId;
            state.publicRoomData.curRoomId = action.payload.roomId;
            state.publicRoomData.prevRoomName = state.publicRoomData.curRoomName;
            state.publicRoomData.curRoomName = action.payload.roomName;
        }



    }
})

export const roomsActions = roomsSlice.actions;

export default roomsSlice