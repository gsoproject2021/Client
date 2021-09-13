import {Grid, StylesProvider,Box, TextField, Button} from '@material-ui/core';




function Chat(){
    return(
        <StylesProvider injectFirst>
            <Box className="h-full pb-10">
                <Box className="bg-gray-100 h-full mb-2 border-2 border-gray-400 rounded">

                </Box>
                <Box className="flex px-2 py-2">
                    <TextField className="bg-white" variant="outlined" fullWidth placeholder="Type something"/>
                    <Button className="bg-blue-400 mx-2 my-2 text-white border-4 border-blue-700 hover:bg-blue-700 hover:border-blue-200">Send</Button>
                </Box>
            </Box>
        </StylesProvider>
    );
}
export default Chat;