import { createSlice } from "@reduxjs/toolkit";
function getIndex(state, action) {
  return state.pizzas.findIndex((pizza) => pizza.id === action.payload);
}

const initialState = {
  pizzas: [],
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setData(state, action) {
      const data = action.payload.map((pizza) => {
        return {
          name: pizza.name,
          unitPrice: pizza.unitPrice,
          id: pizza.id,
          quantity: 0,
        };
      });
      state.pizzas = data;
    },
    increase(state, action) {
      state.pizzas[getIndex(state, action)].quantity += 1;
    },
    decrease(state, action) {
      state.pizzas[getIndex(state, action)].quantity -= 1;
    },
    delete(state, action) {
      state.pizzas[getIndex(state, action)].quantity = 0;
    },
  },
});
export default menuSlice.reducer;
export const { setData, increase, decrease, delete:deleteMe } = menuSlice.actions;
