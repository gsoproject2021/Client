import {Box, TextField, Typography,Button} from "@mui/material";
import { makeStyles } from "@mui/styles";
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';



const containerVariants = {
    hidden:{
        opacity:0,
        x:-2000
    },
    visible:{
        opacity:1,
        x:0,
        
    },
    exit:{
        opacity:0,
        x:2000
    }
}

const useStyles = makeStyles({
    root:{
        marginLeft:'20%',
        marginRight:'20%',
        marginTop:'7.5%'
    }
})

export default function ContactUs(){
    const classes = useStyles();
    return(
        <AnimatePresence exitBeforeEnter>
            <Box className={classes.root}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"  >
                <Typography align="center" variant="h3" sx={{mb:4}}>Contact us</Typography>
                <TextField fullWidth label="Subject" sx={{mb:3}} />
                <TextField fullWidth label="Email" sx={{mb:3}} />
                <TextField fullWidth placeholder="Type a messeage" sx={{mb:2}} multiline minRows={10} />
                <Box sx={{px:'35%',pt:'5%'}}>
                    <Button variant="contained" size="large" fullWidth>Send</Button>
                </Box>
            </Box>
        </AnimatePresence>
    );
}