import { useState } from 'react';
import {Box,List,IconButton,Typography,Divider} from '@mui/material';
import { Add } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import colors from '../utils/colors';
import AddUsers from './AddUsers';
import User from './User';
import {motion} from 'framer-motion/dist/framer-motion';
import { useSelector } from 'react-redux';
const useStyles = makeStyles({
    root:{
        height:'50%',
        
    },
    title:{
        display:'flex',
        justifyContent:'space-between',
        boxShadow:10,
        backgroundColor:[colors.blueGray[700]],
        padding:4,
        borderRadius:8,
        marginBottom:4,
        color:colors.blueGray[300]
    
    }
})

export default function Members(){

    const classes = useStyles();

    const [open,setOpen] = useState(false);

    const currentRoomUsers = useSelector(state => state.cache.currentRoom.users)

    const handleClose = (status) => {
        setOpen(status);
    }

    const showUser = (user) => {
        return <User key={user.UserID} id={user.UserID} username={user.FirstName} isAdmin={user.IsAdmin} />
    }

    return(
        <Box className={classes.root}>
            <Box className={classes.title}>
                <Typography variant="h5" gutterBottom >Members</Typography>
                <IconButton component={motion.div} whileHover={{scale:1.5}} sx={{color:colors.blueGray[300]}} onClick={()=>setOpen(true)} >
                    <Add/>
                </IconButton>
            </Box>
            <AddUsers openDialog={open} closeDialog={handleClose}/> 
            
            <Divider light />
            <List sx={{bgcolor:'primary.light'}}>
                {currentRoomUsers.map(showUser)}
            </List>
            
        </Box>
    );
}