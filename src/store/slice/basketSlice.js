
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToOrder: (state, action) => {
      state.products.push(action.payload);
    },
    setAmount: (state, action) => {
      state.products.find(
        (element) => element.id === action.payload.id
      ).amount = action.payload.amount;
    },
    setResetOneOrder: (state, action) => {
      const index = state.products.findIndex(
        (element) => element.id === action.payload.id
      );
      if (index !== -1) {
        state.products[index] = initialState;
      }
    },
    resetOrder: (state) => {
      state.products = [];
    },
  },
});

export const {addToOrder, setAmount, resetOrder,setResetOneOrder} = basketSlice.actions

export default basketSlice.reducer