import { StylesProvider ,Box, Typography, TextField,Grid, Button,Link,Radio, CardMedia, FormControl, FormLabel, RadioGroup, FormControlLabel} from "@material-ui/core";
import pic from "../../images/logo1.jpeg";

function SignUp(){
    return(
        <StylesProvider injectFirst>
             <Box className="h-14 w-64 mx-auto mb-32  ">
                    <CardMedia  component="img" image={pic}/>
                </Box>
            <Box boxShadow={3} className=" space-y-3 px-8 py-4 items-center   border border-gray-300 w-2/6 mx-auto mt-24 shadow">
                
               
                
                <Typography  component="h1" align="center" variant="h4" >Sign Up</Typography>
                
                    
                <form>

                
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="First name" variant="outlined" name="firstname"/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField required fullWidth label="Last name" variant="outlined" name="lastname"/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl className="flex" >
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
                            <TextField required fullWidth label="Address" variant="outlined" name="address"/>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField required fullWidth label="Phone" variant="outlined" name="phone"/>
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Button fullWidth className="bg-green-400 rounded "   size="medium" type="submit">Sign Up</Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Link>Have an account?</Link>
                        </Grid>    
                        
                    </Grid>
                </form>
            </Box>
        </StylesProvider>
    );
}
export default SignUp;