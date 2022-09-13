import { createSlice } from "@reduxjs/toolkit";


const initialState={
    origin:null,
    destination:null,
    travelTimeinformation:null,
};

export const navslice=createSlice({
    name:"navigation",
    initialState,
    reducers:{
                setOrigin:(state,action)=>{
                    state.origin=action.payload;
                },
                setDestination(state,action)
                {
                    state.destination=action.payload;
                },
                settraveTimeinformation:function (state,action){
                    state.travelTimeinformation=action.payload;
                }
                
    }
})
export const {setOrigin,setDestination,settraveTimeinformation}=navslice.actions;
 const checkOrigin=(state)=>{state.navigation.origin}
 export {checkOrigin};
export default navslice.reducer;