import {StylesProvider} from "@material-ui/styles";
import {Box,Typography,List} from "@material-ui/core";

import TestRoom from "./TestRoom";
import TestEvent from "./TestEvent";



function TestEvents(){
    return(
        <StylesProvider injectFirst>
            <Box className="bg-gray-600 h-full  ">
                <Typography variant="h5" className="bg-gray-700 px-4 text-white py-4">Events</Typography>
                <Box component="div" overflow="auto" className="px-2 space-y-2 overflow-y-auto h-96" >
                    <List className=" space-y-2 overflow-y-auto di">
                        <TestEvent/>
                        <TestEvent/>
                        <TestEvent/>
                        <TestEvent/>
                    </List>
                </Box>
                
            </Box>

        </StylesProvider>
    );
}

export default TestEvents;