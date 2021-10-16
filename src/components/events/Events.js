import {useState} from "react";
import { Box,  Paper, List } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import EventMenu from "./EventMenu";
import Event from './Event';
import {useSelector,useDispatch} from "react-redux";
import { roomsDataAction } from "../store/roomsData";


function Events(){

    
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const [eventSubject,setEventSubject] = useState("");
    const [eventDate,setEventDate] = useState("");
    const [eventDescription,setEventDescription] = useState("");
    
    const eventSubjectHandle = (subject,date,description)=>{
        setEventSubject(subject);
        setEventDate(date);
        setEventDescription(description);
    }

    


    const showEvents = (event)=>{
        return <Event subject={event.subject} date={event.date} description={event.description} getEventSubject={eventSubjectHandle} />
    }

    return(
        <StylesProvider injectFirst>
            <Box className="  h-full my-1 ">
                <EventMenu  editSubject={eventSubject} editDate={eventDate} editDescription={eventDescription} />
                <Box className="px-2 space-y-2 overflow-y-auto h-96">
                    <List className="px-4 ">
                        {currentRoom.events.map(showEvents)}
                    </List>
                    </Box>
            </Box>
        
        </StylesProvider>
    );
}
export default Events;