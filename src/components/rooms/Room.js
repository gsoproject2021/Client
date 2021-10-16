import {ListItem,ListItemAvatar,Avatar,Typography,ListItemText} from "@material-ui/core";
import {PeopleAltOutlined} from "@material-ui/icons";
import gso from "../../images/logo1.jpeg";
import {useState} from "react";

function Room(props){
    
    const [selectedRoom,setSelectedRoom] = useState(null);
    
    const clickHandle = ()=>{
        setSelectedRoom(true)
        props.getRoomName(props.roomName);
    }

    const unCheckRoom = ()=>{
        setSelectedRoom(false);
    }

    return(
            <ListItem button onClick={clickHandle} selected={selectedRoom} onBlur={unCheckRoom} className="hover:bg-gray-500 focus:bg-gray-500">
                <ListItemAvatar>
                    <Avatar src={gso||<PeopleAltOutlined/>}>
                        <PeopleAltOutlined/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className="text-gray-200" primary={<Typography variant="subtitle1" >{props.roomName}</Typography>} />
            </ListItem>
    );
}
export default Room;