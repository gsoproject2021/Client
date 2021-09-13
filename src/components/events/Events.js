import {useState} from "react";
import { Box, Card, Paper, Typography,List, IconButton, TextField, Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import EventMenu from "../EventMenu";
import Event from './Event';


const EVENTS = [
    {
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
    }
]



function Events(props){

    const [events,setEvents] = useState(EVENTS);
    const [eventSubject,setEventSubject] = useState("");
    const [event,setEvent] = useState({id:0,subject:'',date:'',description:''});

    const eventSubjectHandle = (subject)=>{
        setEventSubject(subject);
        console.log(eventSubject);
    }

   

    const addEvent=(eventSubject,eventDate,eventDescription)=>{
        console.log(eventSubject,eventDate,eventDescription);
        setEvent(event.id=events.length,event.subject=eventSubject,event.date=eventDate,event.description=eventDescription);
        setEvents([...events,event]);
        setEvent({id:0,subject:'',date:'',description:''});
    }

    const editEvent = ()=>{
        console.log("event changed");
    }

    const deleteEvent = ()=>{
        setEvents(events.filter(event => event.subject !== eventSubject));
    }






    const showEvents = (event)=>{
        return <Event subject={event.subject} date={event.date} description={event.description} getEventSubject={eventSubjectHandle} />
    }

    return(
        <StylesProvider injectFirst>
            <Box className="  h-96 my-1 ">
                <EventMenu addEvent={addEvent} editEvent={editEvent} deleteEvent={deleteEvent} eventData={addEvent}/>
                <Paper className="overflow-y-auto h-80 bg-green-200 mx-2 border-2">
                    <List className="px-4 ">
                        {events.map(showEvents)}
                    </List>
                    </Paper>
            </Box>
        
        </StylesProvider>
    );
}
export default Events;