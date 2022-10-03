import {Box, TextField, Typography,Button} from "@mui/material";
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';
import Logo from "../components/Logo";



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



export default function ContactUs(){
    
    return(
        <AnimatePresence exitBeforeEnter>
            <Box 
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            sx={{height:'100vh',mx:'20%'}}  >
                <Box sx={{ width:'50%',px:'25%'}}>
                    <Logo/>
                </Box>
                <Typography align="center" variant="h3" sx={{mb:4}}>Contact us</Typography>
                <TextField fullWidth label="Subject" sx={{mb:3}} />
                <TextField fullWidth label="Email" sx={{mb:3}} />
                <TextField fullWidth placeholder="Type a messeage" sx={{mb:2}} multiline minRows={10} />
                <Box sx={{px:'35%',pt:'2%'}}>
                    <Button variant="contained" size="large" fullWidth>Send</Button>
                </Box>
            </Box>
        </AnimatePresence>
    );
}