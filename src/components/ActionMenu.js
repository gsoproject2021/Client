import {Slide, Box,TextField, Button, StylesProvider,Grow, Typography, IconButton, InputBase, Dialog, DialogTitle, DialogActions} from "@material-ui/core";
import {GroupAdd,Edit,DeleteForever} from "@material-ui/icons";
import {useState} from "react";


function ActionMenu(props){

    const [add,setAdd] = useState(false);
    const [edit,setEdit] = useState(false);
    const [addField,setAddField] = useState("");
    const [editField,setEditField] = useState("");

    const openAdd = ()=>{
        setAdd(true);
    }
    const closeAdd = ()=>{
        setAdd(false);
    }

    const openEdit = ()=>{
        setEditField(props.prevName);
        setEdit(true);
        
    }

    const closeEdit = ()=>{
        setEdit(false);
    }

    const handleAddField = (event)=>{
        setAddField(event.target.value);
    }

    const createRoom = (event)=>{
        event.preventDefault();
        props.addRoom(addField);
        setAdd(false);
    }

    const handleEditField = (event)=>{
        setEditField(event.target.value);
    }

    const editRoom = (event)=>{
        event.preventDefault();
        props.updateRoom(editField);
        setEdit(false);
    }

    return(

        <StylesProvider injectFirst>
            <Box className="flex justify-between  w-full ">
                <Box>
                    <Typography variant="h6" className="text-gray-100 mt-2 ml-3">My Rooms</Typography>
                </Box>
                <Box >
                    <IconButton onClick={openAdd} className="hover:bg-gray-400">
                        <GroupAdd className="text-gray-100 "/>
                    </IconButton>
                    <IconButton onClick={openEdit} className="hover:bg-gray-400">
                        <Edit className="text-gray-100"/>
                    </IconButton>
                    <IconButton onClick={props.deleteRoom} className="hover:bg-gray-400">
                        <DeleteForever className="text-gray-100"/>
                    </IconButton>
                </Box>
            </Box>
            <Dialog open={add} onClose={closeAdd} >
                <DialogTitle>New Room</DialogTitle> 
                <form  className="flex">
                    <TextField className="w-44 ml-6" placeholder ="New Room" autoFocus onChange={handleAddField}  />
                    <DialogActions >
                        <Button onClick={createRoom} size="small" className="bg-green-500 hover:bg-green-200 text-white" >Add</Button>
                        <Button onClick={closeAdd} size="small" className="bg-red-500 hover:bg-red-200 text-white">Cancel</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Dialog open={edit} onClose={closeEdit} >
                <DialogTitle>Update Room</DialogTitle>
                <form  className="flex">
                    <TextField className="w-44 ml-6" placeholder="Update Room" onChange={handleEditField} autoFocus value={editField} />
                    <DialogActions>
                        <Button onClick={editRoom} size="small" className="bg-green-500 hover:bg-green-200 text-white" >Update</Button>
                        <Button  size="small" onClick={closeEdit} className="bg-red-500 hover:bg-red-200 text-white">Cancel</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </StylesProvider>
    );
}
export default ActionMenu;