import {useState} from "react";
import User from "../User";
import AddUser from "./AddUser";
import pic from '../../images/vitali.jpg';
import { List, Paper, StylesProvider, Typography,Box, IconButton,TextField, Button,Dialog,DialogActions,DialogTitle } from "@material-ui/core";
import {Delete, DeleteForever,PersonAdd} from "@material-ui/icons";

const USERS = ["Vitali","Daniel","Eli"];

const ALLUSERS = ["Yossi","Haim","Yaakov","Pavel"];


function Members(){

    const [actionState,setActionState] = useState(false);
    const [addInput,setAddInput] = useState(false);
    const [existedUsers,setExistedUsers] = useState(USERS);
    const [newUsers,setNewUsers] = useState([]);
    const [userToDel,setUserToDel] = useState();
    
    const userStatus = (status)=>{

        if(status){
            setActionState(false);
        }
        else
            setActionState(true);
    }

    const showAddUser = ()=>{
        setAddInput(true);
    }

    const hideAddRoom = ()=>{
        setAddInput(false);
    }

    const changeInputHandle = (event)=>{
        console.log("changed");
        if(event.target.checked){
            
            setNewUsers(newUsers => [...newUsers,event.target.name]);
        }
        else{
            setNewUsers(newUsers.filter(user => user!==event.target.name));
        }
        console.log(newUsers);
    }

    const addNewUsers = ()=>{
        setExistedUsers([...new Set(existedUsers.concat(newUsers))]);
        setNewUsers([]);
        setAddInput(false);
    }

    const userToDelete = (name)=>{
        setActionState(!actionState);
        setUserToDel(name);

    }

    const deleteUser = ()=>{
        setExistedUsers(existedUsers.filter(user => user !== userToDel));
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
            <Box className="flex flex-col justify-between h-96 rounded-2xl mx-2">
                <Box className=" flex justify-between border-blue-300  mx-3 pl-2 my-2 bg-blue-100 border-2 rounded-2xl px-2 py-1"> 
                    
                      
                                
                    <Typography variant="h5" className="mt-1" >Members </Typography>
                    <Box className=" mt-2">
                        <IconButton onClick={showAddUser} size="small" disabled={actionState} >
                            <PersonAdd/>
                        </IconButton>
                        <IconButton size="small" disabled={!actionState} onClick={deleteUser} >
                            <DeleteForever/>
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
                <Paper className="border-2 border-gray-200 h-96 bg-blue-300 overflow-y-auto" >
                    <List className="overflow-scroll border-2 border-t-0 shadow-inner mx-3 h-64 rounded bg-white my-4" >
                        {existedUsers.map(existedUserList)}
                    </List>
                </Paper>
            </Box>
        </StylesProvider>    
           
        
            
        
    );
}
export default Members;