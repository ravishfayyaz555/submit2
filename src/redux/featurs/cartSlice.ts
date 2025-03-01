import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IProduct {
    id:number;
    name:string;
    img:string;
    price:number;
    quantity:number;
}

const initialState: Array<IProduct> = [];

export const carteSlice = createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        addToCart:(state,action: PayloadAction<IProduct>) => {
            if(state.findIndex(pro => pro.id === action.payload.id) === -1){
                state.push(action.payload)
            }else{
                return state.map(item => {
                  return item.id === action.payload.id ? { ...item, quantity: item.quantity +1}
                  :  item ;
                });
            }
        },

          removefromCart:(state, action: PayloadAction<number>) => {
          const id = action.payload
          return state.filter(item => item.id !== id)
          }


    },
});

export const {addToCart, removefromCart} = carteSlice.actions
export default carteSlice.reducer