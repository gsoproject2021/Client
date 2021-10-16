import { StylesProvider } from "@material-ui/styles";
import {Typography,Paper,Grid, List,Button,ButtonGroup} from "@material-ui/core";


import Room from "../rooms/Room";
import { Clear, DeleteOutline, Edit, PersonAdd, SupervisorAccount } from "@material-ui/icons";




function RoomsManage(){
    return(
        <StylesProvider injectedFirst>
            <Paper className="mx-10 my-16 py-4 h-full bg-gray-600">
                <Typography className="py-4" align="center" variant="h4">Rooms</Typography>
                <Grid container spacing={3}>
                    <Grid item xs={5}>
                        <ButtonGroup orientation="vertical" className="w-40 space-y-8 mx-44">
                            <Button startIcon={<PersonAdd/>} variant="contained" className="bg-green-400 text-white hover:bg-green-500">Add</Button>
                            <Button startIcon={<Edit/>} variant="contained" className="bg-yellow-400 text-white hover:bg-yellow-500">Edit</Button>
                            <Button startIcon={<DeleteOutline/>} variant="contained" className="bg-red-400 text-white hover:bg-red-500">Delete</Button>
                            <Button startIcon={<SupervisorAccount/>} variant="contained" className="bg-blue-400 text-white hover:bg-blue-500">Set as admin</Button>
                            <Button startIcon={<Clear/>} variant="contained" className="bg-gray-400 text-white hover:bg-gray-500">Kick User</Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={7} >
                        <Paper className="mr-36">
                            <List className="divide-y-2">
                                <Room roomName="Sport"/>
                                <Room roomName="Sport"/>
                                <Room roomName="Sport"/>
                                <Room roomName="Sport"/>
                                <Room roomName="Sport"/>
                            </List>
                        </Paper>    
                    </Grid>
                </Grid>
            </Paper>
        </StylesProvider>
    );
}

export default RoomsManage;