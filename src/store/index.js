import { configureStore } from "@reduxjs/toolkit";
import { usersReducer, addUser } from "./slices/usersSlice";

const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export { store, addUser };