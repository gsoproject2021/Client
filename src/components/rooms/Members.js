import {useState} from "react";
import User from "../User";
import AddUser from "./AddUser";
import { List, Paper, StylesProvider, Typography,Box, IconButton, Button,Dialog,DialogActions,DialogTitle } from "@material-ui/core";
import { DeleteForever,PersonAdd} from "@material-ui/icons";

import { useSelector ,useDispatch} from "react-redux";
import { roomsDataAction } from "../store/roomsData";

const USERS = ["Vitali","Daniel","Eli"];

const ALLUSERS = ["Yossi","Haim","Yaakov","Pavel"];


function Members(){

    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const dispatch = useDispatch(); 

    const [actionState,setActionState] = useState(false);
    const [addInput,setAddInput] = useState(false);
    
    const [newUsers,setNewUsers] = useState([]);
    const [userToDel,setUserToDel] = useState();
    
    const showAddUser = ()=>{
        setAddInput(true);
    }

    const hideAddRoom = ()=>{
        setAddInput(false);
    }

    const changeInputHandle = (event)=>{
        if(event.target.checked){
            
            setNewUsers(newUsers => [...newUsers,event.target.name]);
        }
        else{
            setNewUsers(newUsers.filter(user => user!==event.target.name));
        }
    }

    const addNewUsers = ()=>{
        dispatch(roomsDataAction.addMembers(newUsers))
        setNewUsers([]);
        setAddInput(false);
    }

    const userToDelete = (name)=>{
        setActionState(!actionState);
        setUserToDel(name);

    }

    const deleteUser = ()=>{
        dispatch(roomsDataAction.removeMember(userToDel));
        setActionState(!actionState);
    }

    const handleAllUsers = (user) =>{
        return <AddUser key={user} uName ={user} name={user}  onChange={changeInputHandle} /> ;
    }

    const existedUserList = (user)=>{
        return <User key={user} uName={user}  username={userToDelete} />;
    }


    return(
        <StylesProvider injectFirst>
            <Box className="flex flex-col justify-between h-full  ">
                <Box className=" flex justify-between bg-gray-700 px-2">               
                    <Typography variant="h6" className=" px-4 text-white py-4">Members</Typography>
                    <Box className=" mt-4 space-x-2">
                        <IconButton onClick={showAddUser} size="small" disabled={actionState} className="hover:bg-gray-400">
                            <PersonAdd className="text-gray-100 "/>
                        </IconButton>
                        <IconButton size="small" disabled={!actionState} onClick={deleteUser} className="hover:bg-gray-400">
                            <DeleteForever className="text-gray-100 "/>
                        </IconButton>
                    </Box>
                    <Dialog open={addInput} onClose={hideAddRoom} className="" >
                        <DialogTitle>Users List</DialogTitle>
                        <Box className="px-4  h-96" overflow="auto">  
                            <List className="w-72">
                                {ALLUSERS.map(handleAllUsers)}
                            </List>
                        </Box>
                            <DialogActions className="mx-24">
                                <Button size="small" className="bg-green-500 hover:bg-green-200 text-white" onClick={addNewUsers} >Add</Button>
                                <Button onClick={hideAddRoom} size="small" className="bg-red-500 hover:bg-red-200 text-white">Cancel</Button>
                            </DialogActions>
                    </Dialog>        
                </Box>   
                <Box overflow="auto" className="px-2 space-y-2 overflow-y-auto h-96" >
                    <List className=" space-y-2 overflow-y-auto" >
                        {currentRoom.members.map(existedUserList)}
                    </List>
                </Box>
            </Box>
        </StylesProvider>    
           
        
            
        
    );
}
export default Members;