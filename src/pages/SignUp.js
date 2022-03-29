
import {Avatar,Box,Grid,Typography,TextField,FormControl,FormControlLabel,RadioGroup,FormLabel,Button,Radio,Checkbox} from '@mui/material';
import {motion,AnimatePresence} from 'framer-motion/dist/framer-motion';
import { makeStyles } from '@mui/styles';
import logopic from "../images/logo1.jpeg";
import { Fragment, useState } from 'react';


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

    const [isAdvertiser,setIsAdvertiser] = useState(false);

    const advertiserHandle = (event) => {
        setIsAdvertiser(event.target.checked);
    }

    return(
        <AnimatePresence exitBeforeEnter>
            <Box className={classes.root}
            sx={{width:'30%',mx:'auto',mt:'8%'}}
            component={motion.div}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit" >
                <Avatar sx={{width:'100%',height:130,mb:4,mt:-8,alignContent:'center'}} variant="square" src={logopic} />
                <Typography align="center" variant="h3" gutterBottom>Sign Up</Typography>
                     
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="First name" variant="outlined" name="firstname"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="Last name" variant="outlined" name="lastname"/>
                        </Grid>
                        <Grid item xs={12} >
                            <FormControl  >
                                <FormLabel>Gender</FormLabel>
                                <RadioGroup row className="">
                                    <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                    <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                                </RadioGroup>
                            </FormControl>
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
                        <Grid item xs={12} sm={6}>
                            <FormControlLabel sx={{mx:'auto',my:'auto'}}
                                label="isAdvertiser?"
                                control={<Checkbox onChange={advertiserHandle} />}
                            />
                        </Grid>
                        
                        {isAdvertiser ? <Fragment> <Grid item xs={12} >
                            <TextField  fullWidth label="Address" variant="outlined" name="address"/>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField  fullWidth label="Phone" variant="outlined" name="phone"/>
                        </Grid></Fragment> : null}
                        
                        <Grid item xs={12} sx={{mx:12,mt:4}}>
                            <Button fullWidth size="large" variant='contained'  color="success" type="submit">Sign Up</Button>
                        </Grid>
                           
                    </Grid>
                </form>
            </Box>
            
        </AnimatePresence>
    );
}