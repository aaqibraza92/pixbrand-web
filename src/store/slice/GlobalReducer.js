import { createSlice } from "@reduxjs/toolkit";


const GlobalReducer= createSlice({
    name: 'Global',
    initialState: {
        portfolioColorState: '#111'
    },
    reducers:{
        portfolioColor(state,action){
            state.portfolioColorState = action.payload
        }
    }
})


export default GlobalReducer.reducer;
export const {portfolioColor}=GlobalReducer.actions;