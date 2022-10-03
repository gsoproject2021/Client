import { useState } from 'react';
import {Box,List,IconButton,Typography,Divider} from '@mui/material';
import { Add } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

import AddUsers from './AddUsers';
import User from './User';
import {motion} from 'framer-motion/dist/framer-motion';
import { useSelector } from 'react-redux';
import { blueGrey } from '@mui/material/colors';
import { useEffect } from 'react';


const useStyles = makeStyles({
    root:{
        height:'50%',
        
    },
    title:{
        display:'flex',
        justifyContent:'space-between',
        boxShadow:10,
        backgroundColor:[blueGrey['900']], 
        padding:12,
        color:blueGrey['A100'],
        
    
    }
})

export default function Members(){

    const classes = useStyles();

    const [open,setOpen] = useState(false);
    const [isRoomAdmin,setIsRoomAdmin] = useState();

    const currentRoom = useSelector(state => state.rooms.currentRoom)
    const data = useSelector(state => state.user.data);
    
    const handleClose = (status) => {
        setOpen(status);
    }
    useEffect(() => {
        let currentUser = currentRoom.users.filter(user => user.userId === data.userId) 
        
        setIsRoomAdmin(Boolean(currentUser.isAdmin));
    },[currentRoom])
    
    const showUser = (user) => {
        return <User key={user.userId} isRoomAdmin={isRoomAdmin} userId={user.userId} firstName={user.firstName} isAdmin={user.isAdmin} image={user.image} isOnline={user.isOnline} />
    }

    return(
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant="h5" gutterBottom >Members</Typography>
                {!data.isAdvertiser?<IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:blueGrey[100]}} onClick={()=>setOpen(true)} >
                    <Add/>
                </IconButton>:null}
            </Box>
            <AddUsers openDialog={open} closeDialog={handleClose}/> 
            
            <Divider light />
            <List sx={{color:blueGrey['A200'],overflow:'auto',height:375}}>
                {currentRoom.users.map(showUser)}
            </List>
            
        </Box>
    );
}