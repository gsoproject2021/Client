import {Grid,Typography,CardMedia,Paper,TextField,Button,FormControlLabel,Box,Checkbox,Card, Avatar} from '@mui/material';
import { Link } from 'react-router-dom';
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';


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


export default function Login(){
    
    return(
        <AnimatePresence exitBeforeEnter>
            <Box sx={{mx:'auto',mt:'12%',width:'20%'}}
             component={motion.div}
             variants={containerVariants}
             initial='hidden' 
             animate='visible' 
             exit='exit' >
                    <Box>
                        <Typography sx={{mb:5}}  align="center" component="h1" variant="h3">
                            Sign in
                        </Typography>
                        <form   noValidate>
                            <TextField
                            variant='filled'
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address / Username"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            />
                            <TextField
                            variant='filled'
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            />
                            <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                            />
                            <Button
                            sx={{px:'20%'}}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            component = {motion.button}
                            whileHover={{scale:1.1}}
                            >
                            Sign In
                            </Button>
                            <Grid container>
                            <Grid item xs>
                                <Link to="/password-reset">
                                    Forgot password?
                                </Link>
                            </Grid>
                            
                            </Grid>
                            
                        </form>
                    </Box>   
                </Box>
            </AnimatePresence>
        
            
                    
                
                    
                    
        
            
    );
}