import { Drawer, IconButton, SwipeableDrawer,Box } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles"
import { blueGrey } from "@mui/material/colors"
import Menu from "./Menu"
import { Fragment, useState } from "react"
import {  Logout } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/user-actions";
import { userActions } from "../store/user-slice";
import socketConn from "../utils/socket";
const useStyles = makeStyles({
    root:{
        width:"3.5%",
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



export default function SideMenu(){
    const classes = useStyles();
    const token = useSelector(state => state.user.token);
    const rooms = useSelector(state => state.rooms);
    const [openMenu,setOpenMenu] = useState(false);
    const dispatch = useDispatch();
    
    const closeByRandomClick = (toClose) => {
        setOpenMenu(toClose);
    }

    const logoutHandler = () => {

        dispatch(logout(token,rooms.rooms));
    }
    
    return(
        <Fragment>
            <Drawer className={classes.root} anchor="left"
            variant="permanent"
            classes={{paper:classes.root}}>
                <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',height:'100%'}}>
                    <IconButton sx={{color:blueGrey[100],m:1.5}} onClick={() => setOpenMenu(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <IconButton onClick={logoutHandler} sx={{color:blueGrey[100],mx:1.5,mb:4}}  >
                            <Logout/>
                    </IconButton>
                </Box>
               
            </Drawer>
    
            <SwipeableDrawer open={openMenu}  onClose={(e) => setOpenMenu(e.target.value)} onOpen={() => setOpenMenu(false)}>
                <Menu closeMenu={closeByRandomClick}/>    
            </SwipeableDrawer>
        </Fragment>
        
    )
}