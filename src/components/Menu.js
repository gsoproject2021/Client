import {NavLink} from 'react-router-dom';


import { Button, Drawer,List, ListItemButton, ListItemIcon, ListItemText, Typography,Box } from "@mui/material";
import {ContactPage, Home, Info, Logout, ManageAccounts, Person,} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import { padding } from "@mui/system";
import Logo from "./Logo";
import UserPic from "./UserPic";
import colors from '../utils/colors';
import {motion} from 'framer-motion/dist/framer-motion';


const useStyles = makeStyles({
    root:{
        width:"17%",
        alignItems:'center',
        '&.MuiPaper-root':{
            backgroundColor:colors.blueGray[800],
        },
        
    },
    
    link:{
        textDecoration:'none',
    },
    btn:{
        '&.MuiListItemButton-root':{
            color:colors.blueGray[200],
            '&:hover':{
                backgroundColor:colors.blueGray[500],
                
            },
            borderRadius:8
        },
        '&.MuiListItemIcon-root':{
            color:'inherit'
        },
        

    }
    
})

export default function Menu(){
    const classes = useStyles()
    
    
    return(
        <Drawer 
            className={classes.root}
            anchor="left"
            variant="permanent"
            classes={{paper:classes.root}}>
            <Logo/>
            <UserPic/>
            {/* <Box sx={{mt:3}}>   
                <NavLink className={classes.link} to='/main'><Button whileHover={{scale:1.3}} fullWidth component={motion.button} startIcon={<Home/>}>Home</Button></NavLink>
                <NavLink className={classes.link} to='/main/profile'><Button fullWidth startIcon={<Person/>}>Profile</Button></NavLink>
                <NavLink className={classes.link} to='/main/admin'><Button fullWidth startIcon={<ManageAccounts/>}>Management</Button></NavLink>
                <NavLink className={classes.link} to='/main/contact'><Button fullWidth startIcon={<ContactPage/>}>Contact us</Button></NavLink>
                <NavLink className={classes.link} to='/main/about'><Button fullWidth startIcon={<Info/>}>About</Button></NavLink>
            </Box> */}
            <List>

                <NavLink className={classes.link} to='/main'>
                    
                    <ListItemButton  className={classes.btn} component={motion.button} whileHover={{scale:1.3}} whileTap={{ scale: 0.95 }}>
                        <ListItemIcon className={classes.btn} >
                            <Home  />
                        </ListItemIcon>
                        <ListItemText  primary={<Typography variant="h6">Home</Typography>}/>
                    </ListItemButton>
                </NavLink>
                <NavLink className={classes.link} to="/main/profile">
                    <ListItemButton className={classes.btn} component={motion.button} whileHover={{scale:1.3}} whileTap={{ scale: 0.95 }}>
                        <ListItemIcon className={classes.btn}>
                            <Person/>
                        </ListItemIcon>
                        <ListItemText  primary={<Typography variant="h6">Profile</Typography>}/>
                    </ListItemButton>
                </NavLink>
                <NavLink className={classes.link} to='/main/admin'>
                    <ListItemButton className={classes.btn} component={motion.button} whileHover={{scale:1.3}} whileTap={{ scale: 0.95 }}>
                        <ListItemIcon className={classes.btn}>
                            <ManageAccounts/>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="h6">Management</Typography>}/>
                    </ListItemButton>
                </NavLink>
                <NavLink className={classes.link} to='/main/contact'>
                    <ListItemButton className={classes.btn} component={motion.button} whileHover={{scale:1.3}} whileTap={{ scale: 0.95 }}>
                    <ListItemIcon className={classes.btn}>
                        <ContactPage/>
                    </ListItemIcon>
                    <ListItemText primary={<Typography variant="h6">Contact us</Typography>}/>
                </ListItemButton>
                </NavLink>
                <NavLink className={classes.link} to='/main/about'>
                    <ListItemButton className={classes.btn} component={motion.button} whileHover={{scale:1.3}} whileTap={{ scale: 0.95 }}>
                        <ListItemIcon className={classes.btn}>
                            <Info/>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="h6">About</Typography>}/>
                    </ListItemButton>
                </NavLink>
            </List>
            <Button sx={{mt:25,color:colors.blueGray[200],backgroundColor:'error.main'}} classes={{root:classes.logout}} endIcon={<Logout/>}>Logout</Button>
            
        </Drawer>
    );
}