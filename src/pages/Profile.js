import {Box, Paper,Typography,Grid,TextField,FormControl,FormLabel,RadioGroup,FormControlLabel,Radio,Button,Checkbox} from '@mui/material';



export default function Profile(props){
    return(
        <Box sx={{paddingLeft:20,paddingRight:20,paddingTop:10}}>
            <Paper sx={{ height:750, mx:3,py:3,px:10}}>
             <Typography sx={{mb:3}} variant="h4" align="center">Vitali Kozokin</Typography>
                <form>
                    <Grid container spacing={3} className="px-8">
                        <Grid item xs={12} sm={6} >
                            <TextField variant="filled" name="firstname" label="First Name" fullWidth value={props.firstname}/>
                        </Grid>
                        <Grid item xs={12} sm={6} >
                            <TextField variant="filled" name="lastname" label="Last Name" fullWidth value={props.lastnamee}/>
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
                            <TextField type="datetime-local" variant="filled" name="birthday"  fullWidth value={props.address}/>
                        </Grid>
                        <Grid item xs={12} >
                            <TextField variant="filled" name="address" label="Address" fullWidth value={props.address}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="filled" name="username" label="Username" fullWidth value={props.username}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="filled" name="password" label="Password" fullWidth value={props.password}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="filled" name="email" label="Email" fullWidth value={props.email}/>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="filled" name="phone" label="Phone" fullWidth value={props.phone}/>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel control={<Checkbox   name="isadvertiser" />} label="Is advertiser?" />
                            <FormControlLabel control={<Checkbox   name="blocked" />} label="Blocked" />
                            <FormControlLabel control={<Checkbox   name="Admin" />} label="Admin" />
                        </Grid>
                        <Grid  item xs={12} sx={{alignContent:'center'}} >
                            <Button className="" type="submit">Update detail</Button>
                        </Grid>
                    </Grid>
                </form> 
            </Paper>
        </Box>
    );
}