import { useEffect, useState } from "react";

import { createTheme,ThemeProvider} from "@mui/material/styles"
import { Box,AppBar,Grid,Toolbar,Typography,Tab,List} from "@mui/material";
import {TabContext,TabList,TabPanel } from "@mui/lab";
import { makeStyles } from "@mui/styles";
import RoomManagement from "../components/RoomManagement";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllRooms, fetchAllUsers } from "../store/admin-actions";
import ManagedUser from "../components/ManagedUser";
import ManagedRoom from "../components/ManagedRoom";
import UserProfile from "../components/UserProfile";
import { blueGrey,grey } from "@mui/material/colors";

const useStyles = makeStyles((theme)=>{
    return{
        root:{
            width:'100%', 
            backgroundColor: blueGrey[400]
        }
    }
})

const theme = createTheme({
    palette:{
        secondary:{
            main: grey[900]
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
        <ThemeProvider theme={theme}>
            <Box className={classes.root} sx={{height:'100vh'}}>
                <AppBar position="sticky" className={classes.root} sx={{bgcolor:blueGrey[700]}}>
                    <Toolbar>
                        <Typography variant="h4">
                            Management
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid container>
                    <Grid item lg={2}>
                        <Box sx={{ width: '100%',height:'93vh', typography: 'body1',borderRight: 1,borderRightColor:"disabled.text",px:1,boxShadow:3}}>
                            
                            <TabContext  value={value} >
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList textColor="secondary" indicatorColor="secondary" onChange={handleChange}  aria-label="lab API tabs example">
                                        <Tab sx={{width:'50%'}} label="Users" value='users' />
                                        <Tab sx={{width:'50%'}} label="Rooms" value='rooms' />  
                                    </TabList>
                                    <TabPanel value='users' >
                                        <List sx={{overflow: 'auto',height:750,width:275}}>
                                                {managedUsers.map(showUsers)}     
                                        </List>
                                    </TabPanel>
                                    <TabPanel value='rooms'>
                                        
                                            <List sx={{overflow: 'auto',height:750,width:275}}>
                                            
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
        </ThemeProvider>
            
    );
}


            
            
          