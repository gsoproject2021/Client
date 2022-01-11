import { useState } from "react";

import { Box } from "@mui/system";
import { AppBar,Grid,Toolbar,Typography,Tab,Paper,List, TextField,FormControl,FormLabel,RadioGroup,Button,ButtonGroup,Radio,Checkbox,FormControlLabel, ListItemButton, ListItemText, ListItemAvatar, Avatar} from "@mui/material";
import {TabContext,TabList,TabPanel } from "@mui/lab";
import { makeStyles } from "@mui/styles";
import styled from 'styled-components';
import Profile from "./Profile";
const useStyles = makeStyles((theme)=>{
    return{
        root:{
            width:'100%'
        }
    }
})




export default function Admin(props){

    const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
                <Grid item lg={3}>
                    <Box sx={{ width: '100%', typography: 'body1',borderRight: 1,borderRightColor:"disabled.text",height:"100%",my:2,px:1,boxShadow:3}}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList onChange={handleChange}  aria-label="lab API tabs example">
                                    <Tab sx={{width:'50%'}} label="Users" value="1" />
                                    <Tab sx={{width:'50%'}} label="Rooms" value="2" />  
                                </TabList>
                            </Box>
                            <TabPanel value="1">Users</TabPanel>
                            <TabPanel value="2">Rooms</TabPanel>
                        </TabContext>
                    </Box>
                </Grid>
                <Grid item lg={9}>
                    <Box sx={{width:"100%",py:3}}>
                        <Paper sx={{ height:750, mx:3,py:3,px:10}}>
                            {/* <Profile/> */}
                        <ButtonGroup sx={{display:'block'}} variant="text">
                            <Button>Create room</Button>
                            <Button>Edit room name</Button>
                            <Button>Edit members</Button>
                            <Button>Delete room</Button>
                            <Button>Create event</Button>
                            <Button>Edit event</Button>
                            <Button>Delete event</Button>
                        </ButtonGroup>
            <Box sx={{display:'flex',py:3,px:2}}>
            <List sx={{width:'50%'}}>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vitali"/>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vitali"/>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vitali"/>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vitali"/>
                                    </ListItemButton>
                                </List>
                <List sx={{width:'50%'}}>
                
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vitali"/>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vitali"/>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vitali"/>
                                    </ListItemButton>
                                    <ListItemButton>
                                        <ListItemAvatar>
                                            <Avatar/>
                                        </ListItemAvatar>
                                        <ListItemText primary="Vitali"/>
                                    </ListItemButton>
                                </List>
                
            </Box>
                        
                        <Box sx={{paddingLeft:30,paddingRight:30}}>
                            <Button size="large" fullWidth type="button">Update</Button>
                        </Box>
                            {/* <Typography sx={{mb:3}} variant="h4" align="center">Vitali Kozokin</Typography>
                <form>
                    <Grid container spacing={3} className="px-8">
                        <Grid item xs={12} sm={6} >
                            <TextField variant="filled" name="firstname" label="First Name" fullWidth value={props.firstname}/>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField variant="filled" name="lastname" label="Last Name" fullWidth value={props.lastnamee}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className="flex" >
                                    <FormLabel>Gender</FormLabel>
                                    <RadioGroup row className="">
                                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                        <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                                    </RadioGroup>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField type="datetime-local" variant="filled" name="birthday"  fullWidth value={props.address}/>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField variant="filled" name="address" label="Address" fullWidth value={props.address}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="filled" name="username" label="Username" fullWidth value={props.username}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="filled" name="password" label="Password" fullWidth value={props.password}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="filled" name="email" label="Email" fullWidth value={props.email}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="filled" name="phone" label="Phone" fullWidth value={props.phone}/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={<Checkbox   name="isadvertiser" />} label="Is advertiser?" />
                            <FormControlLabel control={<Checkbox   name="blocked" />} label="Blocked" />
                            <FormControlLabel control={<Checkbox   name="Admin" />} label="Admin" />
                        </Grid>
                        <Grid  item xs={12}>
                            <Button className="" type="submit">Update detail</Button>
                        </Grid>
                    </Grid>
                </form> */}
                        </Paper>
                    </Box>
                </Grid>
            </Grid>
        </Box>
            
    );
}


            
            
            // <ButtonGroup sx={{display:'block', mt:8}} variant="text">
            //     <Button>Create room</Button>
            //     <Button>Edit room name</Button>
            //     <Button>Edit members</Button>
            //     <Button>Delete room</Button>
            //     <Button>Create event</Button>
            //     <Button>Edit event</Button>
            //     <Button>Delete event</Button>
            // </ButtonGroup>
            // <Box sx={{display:'flex',py:3,px:2}}>
            // <List>
            //                         <ListItemButton>
            //                             <ListItemAvatar>
            //                                 <Avatar/>
            //                             </ListItemAvatar>
            //                             <ListItemText primary="Vitali"/>
            //                         </ListItemButton>
            //                         <ListItemButton>
            //                             <ListItemAvatar>
            //                                 <Avatar/>
            //                             </ListItemAvatar>
            //                             <ListItemText primary="Vitali"/>
            //                         </ListItemButton>
            //                         <ListItemButton>
            //                             <ListItemAvatar>
            //                                 <Avatar/>
            //                             </ListItemAvatar>
            //                             <ListItemText primary="Vitali"/>
            //                         </ListItemButton>
            //                         <ListItemButton>
            //                             <ListItemAvatar>
            //                                 <Avatar/>
            //                             </ListItemAvatar>
            //                             <ListItemText primary="Vitali"/>
            //                         </ListItemButton>
            //                     </List>
            //     <List sx={{width:'50%'}}>
            //     <List>
            //                         <ListItemButton>
            //                             <ListItemAvatar>
            //                                 <Avatar/>
            //                             </ListItemAvatar>
            //                             <ListItemText primary="Vitali"/>
            //                         </ListItemButton>
            //                         <ListItemButton>
            //                             <ListItemAvatar>
            //                                 <Avatar/>
            //                             </ListItemAvatar>
            //                             <ListItemText primary="Vitali"/>
            //                         </ListItemButton>
            //                         <ListItemButton>
            //                             <ListItemAvatar>
            //                                 <Avatar/>
            //                             </ListItemAvatar>
            //                             <ListItemText primary="Vitali"/>
            //                         </ListItemButton>
            //                         <ListItemButton>
            //                             <ListItemAvatar>
            //                                 <Avatar/>
            //                             </ListItemAvatar>
            //                             <ListItemText primary="Vitali"/>
            //                         </ListItemButton>
            //                     </List>
            //     </List>
            // </Box>
        