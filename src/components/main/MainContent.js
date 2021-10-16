import Room from "../rooms/Room";
import { StylesProvider } from "@material-ui/styles";
import {Grid} from "@material-ui/core";

import Members from "../rooms/Members";
import Rooms from "../rooms/Rooms";
import Events from "../events/Events";
import Chat from "../Chat";
function MainContent(){
    return(
        <StylesProvider injectFirst>

        
        <Grid container className="h-full">
            <Grid item direction="column" xs={3} className="border-r-2 border-gray-500 ">
                <Grid item>
                    <Rooms/>
                </Grid>
                <Grid item>
                    <Rooms/>
                </Grid>
            </Grid>
            <Grid item xs={6} className="bg-gray-400">
                <Chat/>
            </Grid>
            <Grid item xs={3} className="border-l-2 border-gray-500">
                <Grid item >
                    <Members/>
                </Grid>
                <Grid item >
                    <Events/>
                </Grid>
            </Grid>
        </Grid>
        </StylesProvider>
    );
}
export default MainContent;