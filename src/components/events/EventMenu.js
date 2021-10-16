import { Box,Dialog,DialogContent,DialogTitle,IconButton, TextField, Typography,Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/styles";
import {EventBusy,EventNote, EventAvailable} from "@material-ui/icons";
import { useState } from "react";
import {useDispatch} from "react-redux";
import { roomsDataAction } from "../../components/store/roomsData";


function EventMenu(props){

    const dispatch = useDispatch();

    const [add,setAdd] = useState(false);
    const [edit,setEdit] = useState(false);
    const [subject,setSubject] = useState('');
    const [date,setDate] =useState('');
    const [description,setDescription] = useState('');
    const [prevSubject,setPrevSubject] = useState('');


    const getSubject = (event)=>{
        setSubject(event.target.value);
    }

    const getDate = (event)=>{
        setDate(event.target.value);
    }

    const getDescription = (event)=>{
        setDescription(event.target.value);
    }

    const editSubject = (event)=>{
        setSubject(event.target.value);
    }

    const editDate = (event)=>{
        setDate(event.target.value);
    }

    const editDescription = (event)=>{
        setDescription(event.target.value);
    }

    const addEvent=()=>{
        dispatch(roomsDataAction.addEvent([subject,date,description]));
        setAdd(false);
    }

    const editEvent = ()=>{
        dispatch(roomsDataAction.editEvent([prevSubject,subject,date,description]));
        setEdit(false);
    }

    const deleteEvent = ()=>{
        dispatch(roomsDataAction.deleteEvent(props.editSubject)); 
    }

    const openAdd = ()=>{
        setAdd(true);
        setSubject('');
        setDate('');
        setDescription('');
    }

    const closeAdd = ()=>{
        setAdd(false);
    }

    const openEdit = ()=>{
        setEdit(true);
        setSubject(props.editSubject);
        setDate(props.editDate);
        setDescription(props.editDescription);
        setPrevSubject(props.editSubject);
        
    }

    const closeEdit = ()=>{
        setEdit(false);
    }


    return(
        <StylesProvider injectFirst>
            <Box className="bg-gray-700 text-white flex justify-between  my-2 py-3 px-2">
                <Typography className="text-gray-100 mt-2 ml-3" variant="h6">My Events</Typography>
                <Box>
                    <IconButton onClick={openAdd} className="hover:bg-gray-400">
                        <EventAvailable className="text-gray-100 "/>
                    </IconButton>
                    <IconButton onClick={openEdit} className="hover:bg-gray-400">
                        <EventNote className="text-gray-100 "/>
                    </IconButton>
                    <IconButton onClick={deleteEvent} className="hover:bg-gray-400">
                        <EventBusy className="text-gray-100 "/>
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
                        <Button onClick={addEvent} size="small" className="text-white bg-red-500">Create</Button>
                        <Button size="small" className="text-white bg-green-500" onClick={closeAdd}>Cancel</Button>
                    </Box>
                </DialogContent>
            </Dialog>
            <Dialog open={edit} onClose={closeEdit}>
                <DialogTitle>Edit Event</DialogTitle>
                <DialogContent >
                    <Box className="flex justify-between space-x-3">
                        <TextField type="text" placeholder="Subject" onChange={editSubject} value={subject}/>
                        <TextField type="datetime-local" onChange={editDate} value={date} />
                        <TextField type="text" placeholder="Description" onChange={editDescription} value={description} />
                    </Box>
                    <Box className="flex justify-end space-x-4 my-2 mt-4">
                        <Button size="small" className="text-white bg-red-500" onClick={editEvent} >Update</Button>
                        <Button size="small" className="text-white bg-green-500" onClick={closeEdit}>Cancel</Button>
                    </Box>
                </DialogContent>
            </Dialog>
        </StylesProvider>
    );
}
export default EventMenu;