import { Avatar, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import { Image} from "@material-ui/icons";

function TestRoom(props){
    return(
        <StylesProvider injectFirst>
            <ListItem button className="hover:bg-gray-700">
                <ListItemAvatar>
                    <Avatar>
                        <Image />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText className="text-gray-200" primary={<Typography variant="subtitle1" >{props.roomName}</Typography>} />
            </ListItem>
        </StylesProvider>
    );
}

export default TestRoom;