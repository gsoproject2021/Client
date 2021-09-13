import { Typography,Box, TextField, TextareaAutosize } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";

function Contact(){
    return(
        <StylesProvider injectFirst>
            <Box className=" py-4 px-48 space-y-8 border-2 border-gray-300 rounded-2xl  mx-36 my-20" >

                <Typography align="center" variant="h4">Contact Us</Typography>
                <TextField className=" bg-white  focus:border-green-300" type="text" fullWidth variant="outlined" placeholder="Name"/>
                <TextField className=" bg-white" type="email" fullWidth variant="outlined" placeholder="Email"/>
                <TextareaAutosize className="w-full border-2 rounded" maxRows={15} minRows={15} placeholder="Write you'r message here"/>
            </Box>
        </StylesProvider>
    );
}
export default Contact;