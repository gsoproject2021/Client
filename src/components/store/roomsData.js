import { createSlice } from "@reduxjs/toolkit";


const initialRoomsData ={rooms: [
    {
        id:'1',
        roomName:'Sport',
        members:["Vitali Kozokin","Daniel Orkabi","Eli Ben Hamo"],
        events:[{
            id:'1',
            subject:'test1',
            date:'01/02/21',
            description:'test1 ble bla'
        },
        {
            id:'2',
            subject:'test2',
            date:'01/02/21',
            description:'test2 ble bla'
        },
        {
            id:'3',
            subject:'test3',
            date:'01/02/21',
            description:'test3 ble bla'
        }]
    },
    {
        id:'2',
        roomName:'Food2',
        members:["Yossi","Pavel","Moshe","Yaakov"],
        events:[{
            id:'1',
            subject:'test4',
            date:'01/02/21',
            description:'test1 ble bla'
        },
        {
            id:'2',
            subject:'test5',
            date:'01/02/21',
            description:'test2 ble bla'
        },
        {
            id:'3',
            subject:'test6',
            date:'01/02/21',
            description:'test3 ble bla'
        }]
    },
    {
        id:'3',
        roomName:'Parties2',
        members:["Yossi","Pavel","Moshe","Yaakov","Vitali Kozokin","Daniel Orkabi","Eli Ben Hamo"],
        events:[{
            id:'1',
            subject:'test8',
            date:'01/02/21',
            description:'test1 ble bla'
        },
        {
            id:'2',
            subject:'test9',
            date:'01/02/21',
            description:'test2 ble bla'
        },
        {
            id:'3',
            subject:'test10',
            date:'01/02/21',
            description:'test3 ble bla'
        }]
    },
    {
        id:'4',
        roomName:'Bla Bla',
        members:["Yaakov","Vitali Kozokin","Daniel Orkabi"],
        events:[{
            id:'1',
            subject:'test11',
            date:'01/02/21',
            description:'test1 ble bla'
        },
        {
            id:'2',
            subject:'test12',
            date:'01/02/21',
            description:'test2 ble bla'
        },
        {
            id:'3',
            subject:'test13',
            date:'01/02/21',
            description:'test3 ble bla'
        }]
    },
    {
        id:'5',
        roomName:'Sport2',
        members:["Yossi","Pavel","Moshe","Eli Ben Hamo"],
        events:[],
        isRoomAdmin:false
    },
    {
        id:'6',
        roomName:'Food',
        members:["Pavel","Moshe","Yaakov","Vitali Kozokin","Daniel Orkabi"],

        events:[]
    }
],currentRoom:{id:'',roomName:'',members:[],events:[]} };

const roomsData = createSlice({
    name: 'roomsData',
    initialState: initialRoomsData,
    reducers:{
        setCurrentRoom(state,action){
            state.currentRoom = state.rooms.filter(room => room.roomName === action.payload)[0];
        },

        createRoom(state,action){
            const newRoom = {id:state.rooms.length.toString(),roomName:action.payload,members:[],events:[]};
            state.rooms.push(newRoom);
        },

        editRoom(state,action){
            state.rooms = state.rooms.map(roomObj =>{
                if(action.payload[0]===roomObj.roomName){
                    roomObj.roomName = action.payload[1];
                    return roomObj;          
                }
                return roomObj;
            });
        },

        deleteRoom(state,action){
            state.rooms = state.rooms.filter(room => room.roomName!==action.payload);
        },

        addMembers(state,action){
            state.currentRoom.members = [...new Set(state.currentRoom.members.concat(action.payload))];
            state.rooms = state.rooms.map(roomObj =>{
                if(state.currentRoom.roomName===roomObj.roomName){
                    return roomObj = state.currentRoom;
                }
                return roomObj;
            })
        },

        removeMember(state,action){
            state.currentRoom.members = state.currentRoom.members.filter(user => user !== action.payload);
            state.rooms = state.rooms.map(roomObj =>{
                if(state.currentRoom.roomName===roomObj.roomName){
                    return roomObj = state.currentRoom;
                }
                return roomObj;
            })
        },

        addEvent(state,action){
            const newEvent = {id:state.currentRoom.events.length.toString(),subject:action.payload[0],date:action.payload[1],description:action.payload[2]};

            state.currentRoom.events = [...state.currentRoom.events.concat(newEvent)];
            state.rooms = state.rooms.map(roomObj =>{
                if(state.currentRoom.roomName===roomObj.roomName){
                    return roomObj = state.currentRoom;
                }
                return roomObj;
            })
        },

        editEvent(state,action){
            console.log(action.payload);
            state.currentRoom.events = state.currentRoom.events.map(event => {
                if(event.subject === action.payload[0]){
                    event.subject = action.payload[1];
                    event.date = action.payload[2];
                    event.description = action.payload[3];
                    return event;
                }
                return event;
            });
            state.rooms = state.rooms.map(roomObj =>{
                if(state.currentRoom.roomName===roomObj.roomName){
                    return roomObj = state.currentRoom;
                }
                return roomObj;
            })
        },

        deleteEvent(state,action){
            state.currentRoom.events = state.currentRoom.events.filter(event => event.subject !== action.payload);
            console.log(state.currentRoom.events);
            state.rooms = state.rooms.map(roomObj =>{
                if(state.currentRoom.roomName===roomObj.roomName){
                    return roomObj = state.currentRoom;
                }
                return roomObj;
            })
        },
    },
});

export const roomsDataAction = roomsData.actions;

export default roomsData.reducer;