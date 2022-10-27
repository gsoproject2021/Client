import { Card,CardContent,Box,Typography, Avatar,ListItem} from "@mui/material"
import { teal,cyan,grey,blueGrey} from "@mui/material/colors"
import { makeStyles } from "@mui/styles"
import { useState } from "react"

import { useSelector } from "react-redux"

const useStyles = makeStyles({
    myMessage:{
        backgroundColor: cyan["700"],
        color: "white",
    },
    otherMessage:{
        backgroundColor: grey['400'],
        color: "black",
    },
    myDirection: {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    otherDirection: {
        display: 'flex'
    }
})


export default function Message({sender,message,senderId,time,messageId}) {
    
    const myId = useSelector(state => state.user.data.userId);
    const classes = useStyles();
    
    return (
        <ListItem sx={{display:"flex",px:3,py:2}} className={myId===senderId ? classes.myDirection : classes.otherDirection}>
            
            <Card sx={{px:2,
                  mx:2,
                  mt:2,
                  width:"60%",
                  bgcolor: myId===senderId ? teal['A700'] : blueGrey['300'],
                  color:'black',
                  }} >
                    
                <CardContent  >
                    
                    
                    <Box sx={{display:'flex',justifyContent:'space-between'}}>
                              
                        <Box >
                            {senderId !== myId ? <Typography variant="h6" gutterBottom >
                                {sender}
                            </Typography> : null}
                            <Typography variant="body1" >
                            {message}
                        </Typography>                        
                        </Box>
                        <Box>
                        <Typography sx={{mb:2}} >{time.date}</Typography>
                        <Typography sx={{ml:4}} variant="body1" >
                            {time.hour}
                        </Typography>
                        </Box>
                    </Box> 
                </CardContent>
            </Card>
        </ListItem>
    )
}