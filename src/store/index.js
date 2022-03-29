import { configureStore } from "@reduxjs/toolkit";

import roomsSlice from './room-slice';
import cacheSlice from './cache-slice'
import userSlice from './user-slice';
import adminSlice from "./admin-slice";

const store = configureStore({
    reducer:{ user: userSlice.reducer, rooms: roomsSlice.reducer, cache: cacheSlice.reducer, admin:adminSlice.reducer}
});

export default store;