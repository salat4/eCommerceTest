
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
    resetOrder: (state) => {
      state.products = [];
    },
  },
});

export const {addToOrder, setAmount, resetOrder} = basketSlice.actions

export default basketSlice.reducer