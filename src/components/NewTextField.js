import { TextField } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import { styled } from '@mui/material/styles';
const NewTextField = styled(TextField)({
    '& label': {
        color:'black'
    },
    '&:hover label': {
        color:blueGrey[100]
    },
    '& label.Mui-focused': {
      color: [blueGrey[100]],
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: blueGrey[100],
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        color:blueGrey[100],
        borderColor: blueGrey[100],
      },
      '&.Mui-focused fieldset': {
        borderColor: blueGrey[100],
      },
    },
  });

  export default NewTextField;