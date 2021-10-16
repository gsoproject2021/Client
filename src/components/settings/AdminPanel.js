import {useState} from "react";

import {  Grid, Paper,Tabs,Tab,Button,Box, Typography} from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";


import Profile from "./Profile";
import RoomsManage from "./RoomsManage";



function AdminPanel(){

    const [value,setValue] =useState(0);

    const handleChange = (event,newValue) => {
        setValue(newValue);
    }

    return(
        

        <StylesProvider injectedFirst>
            <Grid container>
                <Grid item xs={3}  className="py-16">
                    <Paper className="h-full ">
                        <Tabs variant="fullWidth" className="divide-x-2 border-b-4 border-gray-500">
                            <Tab className="bg-yellow-400 focus:bg-yellow-600 text-gray-200 border-r-2"  label={<Typography variant="h6">Users</Typography>}/>
                            <Tab className="bg-yellow-400 focus:bg-yellow-600 text-gray-200 border-l-2" label={<Typography variant="h6">Rooms</Typography>}/>
                        </Tabs>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <RoomsManage/>
                </Grid>
            </Grid>
        </StylesProvider>
    );
}

export default AdminPanel;