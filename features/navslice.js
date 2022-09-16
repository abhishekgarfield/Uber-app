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
                    if(action.payload.time>60)
                    {
                     action.payload.time=(action.payload.time/60).toFixed(1)+" hours";
                     state.travelTimeinformation=action.payload
                    }
                    else{
                        action.payload.time=action.payload.time.toFixed(1)+" min"
                        state.travelTimeinformation=action.payload;
                    }
                }
                
    }
})
export const {setOrigin,setDestination,settraveTimeinformation}=navslice.actions;
 const checkOrigin=(state)=>{state.navigation.origin}
export default navslice.reducer;