import { Grid, IconButton, Paper, TextField,Box, Typography,Button } from "@material-ui/core";
import { MoreVert, Send } from "@material-ui/icons";
import { StylesProvider } from "@material-ui/styles";

function TestChat(){
    return(
        <StylesProvider injectFirst>
            <Box className="  h-full pb-10" >

                <Box item className=" h-full -mb-8" >
                    <Box boxShadow="3" className="flex justify-between bg-yellow-400 rounded-t px-1 text-gray-700">
                        <Typography gutterBottom className="px-4 py-4 mr-10" variant="h4">Sport</Typography>
                        <IconButton className="mx-2 my-4 hover:bg-yellow-500">
                            <MoreVert/>
                        </IconButton>
                    </Box>
                    <Box boxShadow="3" className=" rounded-0 h-5/6 px-4 overflow-y-auto  bg-gray-300 border-2  ">
                        fghfgfgdfgdfg
                        dfgdfg
                        dfg
                    </Box>
                </Box>

                <Box className="flex justify-between  space-x-2 px-3 ">
                    <TextField className="bg-white " variant="outlined" fullWidth />
                    <Button className="rounded-lg bg-green-500 text-white hover:bg-green-600 " startIcon={<Send/>} size="large" >Send</Button>
                </Box>

            </Box>
        </StylesProvider>
    );
}

export default TestChat;