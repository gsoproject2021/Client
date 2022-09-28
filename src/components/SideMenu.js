import { Drawer, IconButton, SwipeableDrawer,Box } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from "@mui/styles"
import { blueGrey } from "@mui/material/colors"
import Menu from "./Menu"
import { Fragment, useState } from "react"
import {  Logout } from "@mui/icons-material";
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
    const [openMenu,setOpenMenu] = useState(false);

    const closeByRandomClick = (toClose) => {
        setOpenMenu(toClose);
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
                    <IconButton sx={{color:blueGrey[100],mx:1.5,mb:4}} >
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