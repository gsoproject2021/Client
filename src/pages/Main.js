import { makeStyles } from "@mui/styles";
import { blueGrey } from "@mui/material/colors";
import { Grid } from "@mui/material";
import Rooms from "../components/Rooms";
import Events from "../components/Events";
import ChatWindow from '../components/ChatWindow';
import Members from '../components/Members'
import { motion } from "framer-motion/dist/framer-motion";
import { useSelector,useDispatch } from "react-redux";
import { useEffect,useState } from "react";




const useStyles = makeStyles({
    root:{
        marginTop:8,
        marginBottom:4,
        height:'100vh',
        width:'100%'
        
    },
    rooms:{
        
        backgroundColor:blueGrey['900'],
        borderRightColor:blueGrey[400],
        
    },
    chat:{
        
    },
    events:{
        
        
        borderLeft:3,
        borderLeftColor:'white'
    }
});

export default function Main(){

    const classes = useStyles();
    const data = useSelector(state => state.user.data);
    const currentRoom = useSelector(state => state.rooms.currentRoom);
    const [isRoomAdmin,setIsRoomAdmin] = useState();

    useEffect(() => {
        let temp = currentRoom.users.filter(user => user.userId === data.userId )
        let [tempUser] = temp;
        if(temp.length === 0 ){
            return
        }
        if( tempUser.isAdmin === true || tempUser.isAdmin === 1 ){
            setIsRoomAdmin(true)
            
        }
        else{
            setIsRoomAdmin(false);
        }
    },[currentRoom,data.userId])

       
    return(
        <Grid component={motion.div} container item  className={classes.root} sx={{height:'100vh'}} >
            <Grid item lg={2} md={4} xs={12} className={classes.rooms}  >    
                <Rooms isCurrentRoomAdmin={isRoomAdmin} />
            </Grid>
            <Grid className={classes.chat} item lg={8} md={4} xs={12} sx={{bgcolor:blueGrey[600],borderRight:2,borderRightColor:blueGrey[500],borderLeft:2,borderLeftColor:blueGrey[500]}}>
                 <ChatWindow isCurrentRoomAdmin={isRoomAdmin} /> 
            </Grid>
            <Grid item lg={2} md={4} xs={12} sx={{bgcolor:blueGrey[900]}} className={classes.events}>
                <Members isCurrentRoomAdmin={isRoomAdmin} /> 
                <Events isCurrentRoomAdmin={isRoomAdmin} />
            </Grid>
        </Grid>
    );
} 