import { Typography,Box, List } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import TestRoom from "./TestRoom";



function TestRooms(){
    return(
        <StylesProvider injectFirst>
            <Box className="bg-gray-600 h-full  ">
                <Typography variant="h6" className="bg-gray-700 px-4 text-white py-4">Public Chats</Typography>
                <Box component="div" overflow="auto" className="px-2 space-y-2 overflow-y-auto h-96" >
                    <List className=" space-y-2 overflow-y-auto divide-opacity-20 divide-gray-300">
                        
                    </List>
                </Box>
                
            </Box>

        </StylesProvider>

    );
}

export default TestRooms;