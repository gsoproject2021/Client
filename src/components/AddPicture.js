import { Dialog,DialogTitle,DialogContent,Box,Button,Avatar,Input } from "@mui/material";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadPicture } from "../store/user-actions";
import { uploadRoomPicture } from "../store/rooms-actions";

/**
 * this component upload picture for room and user
 */
export default function AddPicture({open,dialogState,type,roomId}){
  
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  const pickedHandler = event => {
    let pickedFile;
    let fileIsValid = isValid;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
      fileIsValid = true;
    } else {
      setIsValid(false);
      fileIsValid = false;
    }
    
  };


    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    const closeDialog = () => {
        dialogState(false);
    }

    const addPicture = () => {    
        if(type === 'user'){
          dispatch(uploadPicture(user.token,file))
        }
        if(type === 'room'){
          dispatch(uploadRoomPicture(user.token,roomId,file));
        }
        dialogState(false);
    }



    return (
        <Dialog open={open} onClose={closeDialog} >
            <DialogTitle>
                Add picture
            </DialogTitle>
            <DialogContent>
            <Box >
                {previewUrl && <Avatar src={previewUrl} alt="Preview" sx={{width:350,height:350,my:2}} />}
                {!previewUrl && <p>Please pick an image.</p>}
                <Input onChange={pickedHandler} accept="image/*" id="contained-button-file" multiple type="file" />
            </Box>
                
            <Box sx={{px:8}}>
                <Button sx={{bgcolor:'success.light', color:'white',mt:2}} fullWidth onClick={addPicture} >Add</Button>    
            </Box>
            </DialogContent>
        </Dialog>
    );
}