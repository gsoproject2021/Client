import {Box, TextField, Typography,Card, Button} from "@mui/material";


export default function PasswordReset(){
    return(
        <Box sx={{mt:'5%',px:'40%',py:'5%'}}>
            <Card sx={{px:'10%',py:'5%'}}>
                <Typography sx={{my:3}} variant="h4" align='center'>Reset Password</Typography>
                
                <TextField sx={{my:3}} fullWidth placeholder="Enter you'r mail" helperText="Enter you'r registration email"/>
                <Button fullWidth >Send</Button>
            </Card>
            
        </Box>
    );
}