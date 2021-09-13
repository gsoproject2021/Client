import {useState} from 'react';

import {ListItem,ListItemAvatar,ListItemText,Avatar, Paper, StylesProvider,Checkbox,ListItemSecondaryAction} from "@material-ui/core";



function User(props){
    const [isSelected,setIsSelected] = useState(false) 
    const getName = ()=>{
        setIsSelected(true);
        props.username(props.uName);
        
        
       // props.isUserChecked(isSelected);
        //props.userName(props.uName);
    }
    const unCheckName = ()=>{
        setIsSelected(false);
        //props.isUserChecked(isSelected);
    }

    
    
    return(
        <StylesProvider injectFirst>
            <ListItem button onClick={getName} onBlur={unCheckName} selected={isSelected} className=" w-full border-8 border-gray-200">
                 <ListItemAvatar>
                     <Avatar src={props.pic}/>
                  </ListItemAvatar>
                  <ListItemText >{props.uName}</ListItemText>
                  
             </ListItem>
        </StylesProvider>
        
    );
}
export default User;