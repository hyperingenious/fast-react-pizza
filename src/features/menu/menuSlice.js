import { createSlice } from "@reduxjs/toolkit";
function getIndex(state, action) {
  return state.pizzas.findIndex((pizza) => pizza.id === action.payload);
}

const initialState = {
  pizzas: [],
  totalPizza: 0,
  totalPrice: 0,
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
      state.totalPizza += 1;
      state.totalPrice += state.pizzas[getIndex(state, action)].unitPrice;
    },
    decrease(state, action) {
      state.pizzas[getIndex(state, action)].quantity -= 1;
      state.totalPizza -= 1;
      state.totalPrice -= state.pizzas[getIndex(state, action)].unitPrice;
    },
    delete(state, action) {
      const index = getIndex(state, action);
      state.totalPizza -= state.pizzas[index].quantity;
      state.totalPrice -=
        state.pizzas[index].quantity * state.pizzas[index].unitPrice;
      state.pizzas[index].quantity = 0;
      console.log(initialState);
    },
    clearCart(state, action) {
      for (const pizzaId in state.pizzas) {
        state.pizzas[pizzaId].quantity = 0;
      }

      state.totalPizza = 0;
      state.totalPrice = 0;
    },
  },
});
export default menuSlice.reducer;
export const {
  setData,
  increase,
  decrease,
  delete: deleteMe,
  clearCart,
} = menuSlice.actions;
