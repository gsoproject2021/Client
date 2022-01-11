import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {  roomsApi } from './roomsApi';


export const store = configureStore({
    reducer: {
      [roomsApi.reducerPath]: roomsApi.reducer,
      
    },
    
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(roomsApi.middleware),
  });

  setupListeners(store.dispatch);