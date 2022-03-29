import { makeStyles } from "@mui/styles";

import { Grid } from "@mui/material";
import Rooms from "../components/Rooms";
import Events from "../components/Events";
import ChatWindow from '../components/ChatWindow';
import Members from '../components/Members'
import { motion } from "framer-motion/dist/framer-motion";
import colors from "../utils/colors";




const useStyles = makeStyles({
    root:{
        marginTop:8,
        marginBottom:4,
        height:940,
        
    },
    rooms:{
        height:"100%",
        backgroundColor:colors.blueGray[600],
        borderRight:'2px',
        borderRightColor:colors.blueGray[300],
        boxShadow:'8px 8px 8px 0px'
    },
    chat:{
        
    },
    events:{
        height:"100%",
        
        
    }
});

export default function Main(){
    const classes = useStyles();

    
    return(
        <Grid component={motion.div} container item xs={10} className={classes.root} >
            <Grid item lg={3} md={3} xs={12} className={classes.rooms} sx={{borderRight:2, borderRightColor:colors.blueGray[700]}} >
                <Rooms/>
            </Grid>
            <Grid className={classes.chat} item lg={6} md={3} xs={12} sx={{bgcolor:colors.blueGray[600]}}>
                 <ChatWindow/> 
            </Grid>
            <Grid item lg={3} md={3} xs={12} sx={{bgcolor:colors.blueGray[600]}} className={classes.events}>
                <Members/> 
                <Events/>
            </Grid>
        </Grid>
    );
} 