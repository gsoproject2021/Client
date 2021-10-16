import {useState} from "react";
import { ListItem, Typography,Box } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

function Event(props){
    
    const [selectedEvent,setSelectedEvent] = useState(null);
    
    const clickHandle = ()=>{
        setSelectedEvent(true);
        props.getEventSubject(props.subject,props.date,props.description);      
    }

    const unCheckEvent = ()=>{
        setSelectedEvent(false);
    }
    
    return(
        <StylesProvider injectFirst>
            <ListItem button onClick={clickHandle} selected={selectedEvent} onBlur={unCheckEvent} className=" my-3  bg-gradient-to-r from-green-400 to-blue-500 rounded hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 focus:bg-white">
                <Box >
                    <Typography variant="h6">{props.subject}</Typography>
                    <Typography variant="subtitle2">{props.date}</Typography>
                    <Typography variant="subtitle2">{props.description}</Typography>
                </Box>
            </ListItem>
        </StylesProvider>
    );
}
export default Event;


