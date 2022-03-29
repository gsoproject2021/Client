import React,{useState,useEffect} from "react";
import axios from "axios";


const RoomsContext = React.createContext({
    rooms: [],

    addRoom:(userId,roomName)=>{},
    editRoom:(roomId,roomName)=>{},
    deleteRoom:(roomId)=>{},
    addUser:(roomId,userId)=>{},
    removeUser:(roomId,userId)=>{},
    addAdmin:(roomId,userId)=>{},
    removeAdmin:(roomId,userId)=>{},
    addEvent:(roomId,subject,date,description)=>{},
    editEvent:(eventId,subject,date,description)=>{},
    deleteEvent:(eventId)=>{}

});

export const RoomsContextProvider = (props)=>{
    const [data,setData] = useState('');
    const [reqStatus,setReqStatus] = useState('');
    const [rooms,setRooms] = useState([]);
    const [roomId,setRoomId] = useState();
    const [roomName,setRoomName] = useState('');
    const [userId,setUserId] = useState(2);
    const [eventId,setEventId] = useState();
    const [eventSubject,setEventSubject] = useState('');
    const [eventDate,setEventDate] = useState('');
    const [eventDescription,setEventDescription] = useState('');
    const [events,setEvents] = useState([]);
    
    const [room,setRoom] = useState({id:'',roomName});
    
    // useEffect(() => {
    //          axios.get(`http://localhost:4000/rooms?userId=${userId}`)
    //         .then(res=>{
    //             setRooms(res.data);
    //         })
    //         .catch(err=>console.log(err));
    // }, [])

    // useEffect(()=>{
    //     axios.get(`http://localhost:4000/events?roomId=${roomId}`)
    //     .then(res=>{
    //         setEvents(res.data);
    //     })
    //     .catch(err=>{
    //         console.log(err);
    //     })
    // },[roomId]);
    
        
    
    // const getDetails = (roomId)=>{
    //         axios.get('http://localhost:4000/roomDetails',{roomId})
    //         .then(res=>{
    //             console.log(res);
    //         })
    //         .catch(err=>{
    //             console.log(err);
    //         })
    // }

    const addRoom = ()=>{
        console.log(roomName);
        axios.post('http://localhost:4000/room',{userId:userId,roomName:roomName})
        .then(res=>{
            console.log(res.data);
            setRooms([...rooms,res.data]);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const editRoom = ()=>{
        axios.put('http://localhost:4000/room',{roomId:roomId,roomName:roomName})
        .then(res=>{
            console.log(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const deleteRoom = ()=>{
        console.log(roomId);
        axios.delete('http://localhost:4000/room',{data:{roomId:roomId}})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const addUser = ()=>{

    }

    const removeUser = ()=>{

    }

    const addAdmin = ()=>{

    }

    const removeAdmin = ()=>{

    }

    const getEvents = ()=>{
        axios.get(`http://localhost:4000/events?roomId=${roomId}`)
        .then(res=>{
            
            setEvents(res.data);
        })
        .catch(err=>{
            console.log(err);
        })
    }

    const addEvent = ()=>{
        console.log(eventDate);
        console.log(typeof(eventDate));
        axios.post('http://localhost:4000/event',{roomId:roomId,subject:eventSubject,eventDate:eventDate,description:eventDescription})
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err);
        })

    }

    const editEvent = ()=>{

    }

    const deleteEvent = ()=>{
        axios.delete('http://localhost:4000/event',{data:{eventId:eventId}})
        .then(res=>{
            console.log(res);
        }
        )
        .catch(err=>{
            console.log(err);
        });
    }

    return(
        <RoomsContext.Provider
        value={{
            rooms:rooms,
            roomName:roomName,
            roomId:roomId,
            room:room,
            setRoom:setRoom,
            eventId:eventId,
            eventSubject:eventSubject,
            eventDate:eventDate,
            eventDescription:eventDescription,
            events:events,
            eventId:eventId,
            setEvents:setEvents,
            setUserId:setUserId,
            setRoomId:setRoomId,
            setRoomName:setRoomName,
            setEventId:setEventId,
            setEventSubject:setEventSubject,
            setEventDate:setEventDate,
            setEventDescription:setEventDescription,
            
            addRoom:addRoom,
            editRoom:editRoom,
            deleteRoom:deleteRoom,
            // addUser:addUser,
            // removeUser:removeUser,
            // addAdmin:addAdmin,
            addEvent:addEvent,
            editEvent:editEvent,
            deleteEvent:deleteEvent,
            getEvents:getEvents

        }}>
            {props.children}
        </RoomsContext.Provider>
    );
    
}
export default RoomsContext;