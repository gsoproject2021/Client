import {ListItem,ListItemAvatar,Avatar,ListItemText,ListItemSecondaryAction,Checkbox} from "@material-ui/core";
import {StylesProvider} from "@material-ui/styles";
import {useState} from "react";


function AddUser(props){

    

    return(
        <StylesProvider injectFirst>
            <ListItem button className=" w-full border-8 border-gray-200">
                 <ListItemAvatar>
                     <Avatar src={props.pic}/>
                  </ListItemAvatar>
                  <ListItemText >{props.uName}</ListItemText>
                  <ListItemSecondaryAction>
                    <Checkbox edge="end"  onChange={props.onChange} name={props.name}/>
                </ListItemSecondaryAction>
             </ListItem>
        </StylesProvider>
    );
}
export default AddUser;