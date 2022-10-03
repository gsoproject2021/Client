import {NavLink} from 'react-router-dom';

import {  Drawer,List, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import {ContactPage, Home, Info,  ManageAccounts, Person,} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";

import Logo from "./Logo";


import {motion} from 'framer-motion/dist/framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/user-actions';

import { blueGrey } from '@mui/material/colors';

const useStyles = makeStyles({
    root:{
        width:"17%",
        alignItems:'center',
        
        '&.MuiPaper-root':{
            backgroundColor: blueGrey['800'],
            borderRightColor: blueGrey['500']
        },
        
    },
    
    link:{
        textDecoration:'none',
    },
    btn:{
        '&.MuiListItemButton-root':{
            color:blueGrey['100'],
            '&:hover':{
                backgroundColor:blueGrey[300],
                
            },
            borderRadius:8
        },
        '&.MuiListItemIcon-root':{
            color:'inherit'
        },
        

    }
    
})

export default function Menu({closeMenu}){
    const classes = useStyles()
    const user = useSelector(state => state.user);
    const dispatch = useDispatch()
    
   
    const menuHandler = () => {
        closeMenu(false);
    }
    return(
        <Drawer 
            className={classes.root}
            anchor="left"
            variant="permanent"
            classes={{paper:classes.root}}
            onClick={menuHandler}
            >
            <Logo/>
            {/* <UserPic/> */}
            
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
                {user.data.isAdmin && <NavLink className={classes.link} to='/main/admin'>
                    <ListItemButton className={classes.btn} component={motion.button} whileHover={{scale:1.3}} whileTap={{ scale: 0.95 }}>
                        <ListItemIcon className={classes.btn}>
                            <ManageAccounts/>
                        </ListItemIcon>
                        <ListItemText primary={<Typography variant="h6">Management</Typography>}/>
                    </ListItemButton>
                </NavLink>}
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
            
            {/* <Button onClick={logoutHandler} sx={{mt:25,color:colors.blueGray[200],backgroundColor:'error.main'}} classes={{root:classes.logout}} endIcon={<Logout/>}>Logout</Button> */}
            
               
        </Drawer>
    );
}