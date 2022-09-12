import { createSlice } from "@reduxjs/toolkit";


const initialState={
    items:"10",
};

export const navslice=createSlice({
    name:"naviga",
    initialState,
    reducers:{
                add(state,action){
                    console.log("here");
                    state=action.payload;
                }
    }
})
export const {add}=navslice.actions;
export default navslice.reducer;