import { StylesProvider,Box, TextField, Button,Typography,IconButton} from '@material-ui/core';
import {ExitToApp,Send} from "@material-ui/icons";




function Chat(){
    return(
        <StylesProvider injectFirst>
            <Box className="  h-full pb-10 " >

                <Box item className=" h-full-mb-8" >
                    <Box boxShadow="3" className="flex justify-between bg-yellow-400 rounded-t px-1 text-gray-700">
                        <Typography gutterBottom className="px-4 py-4 mr-10" variant="h4">Sport</Typography>
                        <IconButton className="mx-2 my-4 hover:bg-yellow-500">
                            <ExitToApp/>
                        </IconButton>
                    </Box>
                    <Box boxShadow="3" className="h-96 px-4 overflow-y-auto  bg-gray-300 border-2  ">
                        fghfgfgdfgdfg
                        dfgdfg
                        dfg
                    </Box>
                </Box>

                <Box className="flex justify-between  space-x-2 px-3 my-3">
                    <TextField className="bg-white " variant="outlined" fullWidth />
                    <Button className="rounded-lg bg-green-500 text-white hover:bg-green-600 " startIcon={<Send/>} size="large" >Send</Button>
                </Box>

            </Box>
        </StylesProvider>
    );
}
export default Chat;