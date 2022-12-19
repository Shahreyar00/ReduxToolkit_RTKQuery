import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id:"0", name:"John Doe" },
    { id:"1", name:"Sarah Young" },
    { id:"2", name:"Dave Muller" }
];

const usersSlice = createSlice({
    name: "users",
    initialState, 
    reducers:{},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;