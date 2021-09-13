import { StylesProvider ,Grid,Paper,TextField,FormControlLabel,Link,Box,Checkbox,Button,Typography,CardMedia} from "@material-ui/core";
import pic from "../../images/people2.jpg"
function SignIn(){
    return(
        <StylesProvider injectFirst>
            <Grid container>
                <Grid item xs={false} sm={5} md={8}  >
                    <CardMedia className="h-full " component="img" image={pic}/>
                    </Grid>
                <Grid item xs={12} sm={7} md={4} component={Paper} elevation={6} square className="px-10 py-40 h-screen">
                    <CardMedia/>
                    <Typography className="pb-14" align="center" component="h1" variant="h4">
                        Sign in
                    </Typography>
                    <form   noValidate>
                        <TextField
                        
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
                        <Button className="bg-indigo-400 hover:bg-indigo-600"
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        
                        >
                        Sign In
                        </Button>
                        <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                        </Grid>
                        <Box mt={5}>
                        
                        </Box>
                    </form>
                </Grid>
            </Grid>
        </StylesProvider>
    );
}
export default SignIn;