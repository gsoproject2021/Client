import { createSlice } from "@reduxjs/toolkit";


const initialUserData = {
    username:"",
    firstname:"",
    lastname:"",
    email:"",
    phone:"",
    birthday:"",
    advertiser:"",
    blocked:"",
    admin:""
}



const userData = createSlice({
    name: 'userData',
    initialState:initialUserData,
    reducers:{

    },
});

export const userDataAction = userData.actions;

export default userData.reducer;