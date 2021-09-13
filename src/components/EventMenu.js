import { Box,Dialog,DialogContent,DialogTitle,IconButton, TextField, Typography,Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import {EventBusy,EventNote, EventAvailable} from "@material-ui/icons";
import { useState } from "react";


function EventMenu(props){

    const [add,setAdd] = useState(false);
    const [edit,setEdit] = useState(false);
    const [subject,setSubject] = useState('');
    const [date,setDate] =useState('');
    const [description,setDescription] = useState('');


    const getSubject = (event)=>{
        setSubject(event.target.value);
    }

    const getDate = (event)=>{
        setDate(event.target.value);
    }

    const getDescription = (event)=>{
        setDescription(event.target.value);
    }

    const sendEventDetails = ()=>{  
        props.eventData(subject,date,description);
        setAdd(false);
    }

    const openAdd = ()=>{
        setAdd(true);
    }

    const closeAdd = ()=>{
        setAdd(false);
    }

    const openEdit = ()=>{
        setEdit(true);
    }

    const closeEdit = ()=>{
        setEdit(false);
    }


    return(
        <StylesProvider injectFirst>
            <Box className="bg-green-200 flex justify-between rounded-2xl border-2 border-green-400 my-3 mx-3 px-2">
                <Typography className="mt-2" variant="h5">My Events</Typography>
                <Box>
                    <IconButton onClick={openAdd}>
                        <EventAvailable/>
                    </IconButton>
                    <IconButton onClick={openEdit} >
                        <EventNote/>
                    </IconButton>
                    <IconButton onClick={props.deleteEvent}>
                        <EventBusy/>
                    </IconButton>
                </Box>
            </Box>
            <Dialog open={add} onClose={closeAdd}>
                <DialogTitle>New Event</DialogTitle>
                <DialogContent >
                    <Box className="flex justify-between space-x-3">
                        <TextField type="text" placeholder="Subject" onChange={getSubject} />
                        <TextField type="datetime-local" onChange={getDate} />
                        <TextField type="text" placeholder="Description" onChange={getDescription} />
                    </Box>
                    <Box className="flex justify-end space-x-4 my-2 mt-4">
                        <Button onClick={sendEventDetails} size="small" className="text-white bg-red-500">Create</Button>
                        <Button size="small" className="text-white bg-green-500" onClick={closeAdd}>Cancel</Button>
                    </Box>
                </DialogContent>
            </Dialog>
            <Dialog open={edit} onClose={closeEdit}>
                <DialogTitle>Edit Event</DialogTitle>
                <DialogContent >
                    <Box className="flex justify-between space-x-3">
                        <TextField type="text" placeholder="Subject"/>
                        <TextField type="datetime-local" />
                        <TextField type="text" placeholder="Description"/>
                    </Box>
                    <Box className="flex justify-end space-x-4 my-2 mt-4">
                        <Button size="small" className="text-white bg-red-500">Update</Button>
                        <Button size="small" className="text-white bg-green-500" onClick={closeEdit}>Cancel</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </StylesProvider>
    );
}
export default EventMenu;