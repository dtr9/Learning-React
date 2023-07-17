import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slices/counterSlice';
import bagcounterReducer from "../slices/bagcounterSlice";
import shirtcounterReducer from '../slices/shirtcounterSlice'
import userReducer from '../slices/userSlice';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        bagcounter: bagcounterReducer,
        shirtcounter: shirtcounterReducer,
        userDetail:userReducer,
    },
});

export default store;