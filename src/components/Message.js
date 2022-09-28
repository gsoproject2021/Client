import { Card,CardContent,Box,Typography} from "@mui/material"
import { teal,cyan,grey,blueGrey} from "@mui/material/colors"
import { makeStyles } from "@mui/styles"
import { bgcolor } from "@mui/system"

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
        <Box sx={{display:"flex"}} className={myId===senderId ? classes.myDirection : classes.otherDirection}>

            <Card sx={{px:2,
                  mx:2,
                  mt:2,
                  width:"60%",
                  bgcolor: myId===senderId ? teal['A200'] : blueGrey['300'],
                  color:'black',
                  }} >
                <CardContent>            
                    <Box sx={{display: "flex",justifyContent:"space-between" }}>
                        {senderId !== myId ? <Typography variant="h6" gutterBottom >
                            {sender}
                        </Typography> : null}
                        <Typography>
                            15:04
                        </Typography>                        
                    </Box>
                    <Typography variant="body1" >
                        {message}
                    </Typography>

                </CardContent>
            </Card>
        </Box>
    )
}