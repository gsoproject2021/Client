import {Paper,ListItem,ListItemAvatar,Avatar,Typography, TextField} from "@material-ui/core";
import {PeopleAltOutlined} from "@material-ui/icons";
import gso from "../../images/logo1.jpeg";
import {useState} from "react";

function Room(props){
    
    const [selectedRoom,setSelectedRoom] = useState(null);
    
    const clickHandle = ()=>{
        setSelectedRoom(true)
        props.getRoomName(props.roomName);
        // props.isSelected(selectedRoom);
    }

    const unCheckRoom = ()=>{
        setSelectedRoom(false);
        //props.isSelected(selectedRoom);
    }

    return(
            <ListItem button onClick = {clickHandle} selected={selectedRoom} onBlur={unCheckRoom}>
                <ListItemAvatar>
                    <Avatar src={gso||<PeopleAltOutlined/>}>
                        <PeopleAltOutlined/>
                    </Avatar>
                </ListItemAvatar>
                <Typography variant="h6">{props.roomName}</Typography>
            </ListItem>
    );
}
export default Room;