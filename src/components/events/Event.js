import {useState} from "react";

import { Card, ListItem, Typography,Box } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

function Event(props){
    
    const [selectedEvent,setSelectedEvent] = useState(null);
    
    const clickHandle = ()=>{
        setSelectedEvent(true);
        props.getEventSubject(props.subject); 
    }

    const unCheckEvent = ()=>{
        setSelectedEvent(false);
    }
    
    

    return(
        <StylesProvider injectFirst>
            <ListItem button onClick={clickHandle} selected={selectedEvent} onBlur={unCheckEvent} className=" my-3  hover:bg-red-100 bg-red-300 rounded ">
                
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