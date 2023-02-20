import { createSlice, nanoid } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        // assumption :  action.payload === { firstName: 'first name', lastName: 'last name', age: 'age' , email: 'email' }
        addUser(state, action){
            state.push({
                id: nanoid(),
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                age: action.payload.age,
                email: action.payload.email,
            });
        },
    }
})

export const { addUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;