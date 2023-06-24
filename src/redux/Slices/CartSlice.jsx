import { createSlice } from "@reduxjs/toolkit";


export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addData:(
            thisState,value)=>{
                thisState.push(value.payload)
            },
        remove:(state,action)=>{
             return state.filter((item)=>item.id != action.payload);
            }
    }
})
export const {addData,remove} = CartSlice.actions;
export default CartSlice.reducer;