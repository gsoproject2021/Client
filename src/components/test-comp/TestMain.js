import {Grid} from "@material-ui/core";
import {StylesProvider} from "@material-ui/styles";
import TestChat from "./TestChat";
import TestEvents from "./TestEvents";
import TestMembers from "./TestMembers";
import TestRooms from "./TestRooms";



function TestMain(){
    return(
        <StylesProvider injectFirst>

        
        <Grid container className="h-screen">
            <Grid item direction="column" xs={3} className="border-r-2 border-gray-500 ">
                <Grid item className="">
                    <TestRooms/>
                </Grid>
                <Grid item className="">
                    <TestRooms/>
                </Grid>
            </Grid>
            <Grid item xs={6} className="bg-gray-400 ">
                <TestChat/>
            </Grid>
            <Grid item xs={3} className="border-l-2 border-gray-500">
                <Grid item >
                    <TestMembers/>
                </Grid>
                <Grid item >
                    <TestEvents/>
                </Grid>
            </Grid>
        </Grid>
        </StylesProvider>
    );
}

export default TestMain;