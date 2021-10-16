import { configureStore } from "@reduxjs/toolkit";
import roomsData from "./roomsData";
import userData from "./userData";

const store = configureStore({
    reducer:{ rooms:roomsData, user:userData},
});

export default store;