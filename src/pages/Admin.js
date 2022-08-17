import { useEffect, useState } from "react";


import { Box,AppBar,Grid,Toolbar,Typography,Tab,List, Button} from "@mui/material";
import { Block, Delete } from "@mui/icons-material";
import {TabContext,TabList,TabPanel } from "@mui/lab";
import { makeStyles } from "@mui/styles";
import Profile from "./Profile";
import RoomManagement from "../components/RoomManagement";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRooms, fetchAllUsers } from "../store/admin-actions";
import ManagedUser from "../components/ManagedUser";
import ManagedRoom from "../components/ManagedRoom";
import UserProfile from "../components/UserProfile";


const useStyles = makeStyles((theme)=>{
    return{
        root:{
            width:'100%'
        }
    }
})




export default function Admin(props){

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const managedUsers = useSelector(state => state.admin.users);
    const managedRooms = useSelector(state => state.admin.rooms);
    

    const [value, setValue] = useState('users');
    const [manage,setManage] = useState(true);
    const [managedUser,setManagedUser] = useState(user);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setManage(!manage);
    };
    
    
    useEffect(() => {
        dispatch(fetchAllUsers());
        dispatch(fetchAllRooms(user.token));
        
    },[dispatch]);
    console.log(managedUsers);
    
    const showUsers = (user) =>{
        // return <User key={user.userId} id={user.userId} username={user.firstName} />
        return <ManagedUser key={user.userId} firstName={user.firstName} userId={user.userId} />
    };

    const showRooms = (room)=>{
        return  <ManagedRoom key={room.roomId} roomName={room.roomName} roomId={room.roomId} />
    };
    
    const classes = useStyles();
    return(
        <Box className={classes.root}>
            <AppBar position="sticky" className={classes.root}>
                <Toolbar>
                    <Typography variant="h4">
                        Management
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item lg={2}>
                    <Box sx={{ width: '100%', typography: 'body1',borderRight: 1,borderRightColor:"disabled.text",height:"100%",my:2,px:1,boxShadow:3}}>
                        
                        <TabContext  value={value}>
                            <Box sx={{ height:'100%', borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange}  aria-label="lab API tabs example">
                                    <Tab sx={{width:'50%'}} label="Users" value='users' />
                                    <Tab sx={{width:'50%'}} label="Rooms" value='rooms' />  
                                </TabList>
                                <TabPanel value='users'>
                                    <List>
                                        {managedUsers.map(showUsers)}
                                    </List>
                                </TabPanel>
                                <TabPanel value='rooms'>
                                    <List>
                                        {managedRooms.map(showRooms)}
                                    </List>
                                </TabPanel>
                            </Box>
                        </TabContext>
                    </Box>
                </Grid>
                <Grid item lg={10}>
                        
                    {!manage?<RoomManagement/>:<UserProfile />}
                </Grid>
            </Grid>
            
        </Box>
            
    );
}


            
            
          