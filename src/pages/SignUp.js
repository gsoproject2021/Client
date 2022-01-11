
import {Avatar,Box,Grid,Typography,TextField,FormControl,FormControlLabel,RadioGroup,FormLabel,Button,Radio} from '@mui/material';
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';
import { makeStyles } from '@mui/styles';
import logopic from "../images/logo1.jpeg";
import { Link } from 'react-router-dom';


const containerVariants = {
    hidden:{
        opacity:0,
        x:2000
    },
    visible:{
        opacity:1,
        x:0,
        delay:5
    },
    exit:{
        opacity:0,
        x:-2000
    }
}

const useStyles = makeStyles({
    root:{
        marginLeft:'30%',
        marginRight:'30%',
        marginTop:'10%',
        display:'block'
    },
    
})



export default function SignUp(){
    const classes = useStyles();
    return(
        <AnimatePresence exitBeforeEnter>
            <Box className={classes.root}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit" >
                
                <Typography align="center" variant="h3" gutterBottom>Sign Up</Typography>
                     
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="First name" variant="outlined" name="firstname"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="Last name" variant="outlined" name="lastname"/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl  >
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup row className="">
                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                                </RadioGroup>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField required fullWidth label="Username" variant="outlined" name="username"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="Password" variant="outlined" name="password" type="password"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="Confirm Password" variant="outlined" name="password" type="password"/>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField required fullWidth label="Email" variant="outlined" name="email"/>
                        </Grid>
                        
                        <Grid item xs={12} >
                            <TextField  fullWidth label="Address" variant="outlined" name="address"/>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField  fullWidth label="Phone" variant="outlined" name="phone"/>
                        </Grid>
                        
                        <Grid item xs={12} sx={{mx:12}}>
                            <Button  fullWidth  size="medium" type="submit">Sign Up</Button>
                        </Grid>
                           
                        
                    </Grid>
                </form>
            </Box>
            
        </AnimatePresence>
    );
}