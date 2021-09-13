import { Grid, Paper, TextField, Typography ,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio, Button, Checkbox} from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

function Profile(props){
    return(
        <StylesProvider injectFirst>
            <Paper className="mx-10 my-20">
                <Typography align="center" variant="h4">User Details</Typography>
                <form>
                    <Grid container spacing={3} className="px-8">
                        <Grid item xs={12} sm={6} >
                            <TextField variant="outlined" name="firstname" label="First Name" fullWidth value={props.firstname}/>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField variant="outlined" name="lastname" label="Last Name" fullWidth value={props.lastnamee}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl className="flex" >
                                    <FormLabel>Gender</FormLabel>
                                    <RadioGroup row className="">
                                        <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                                        <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                                    </RadioGroup>
                                </FormControl>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField variant="outlined" name="address" label="Address" fullWidth value={props.address}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" name="username" label="Username" fullWidth value={props.username}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" name="password" label="Password" fullWidth value={props.password}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" name="email" label="Email" fullWidth value={props.email}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" name="phone" label="Phone" fullWidth value={props.phone}/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={<Checkbox   name="isadvertiser" />} label="Is advertiser?" />
                        </Grid>
                        <Grid className="flex justify-center" item xs={12}>
                            <Button className="text-xl bg-blue-400 text-gray-100 hover:bg-blue-300 hover:text-gray-500" type="submit">Update detail</Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </StylesProvider>
    );
}

export default Profile;