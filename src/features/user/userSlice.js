import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

 const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});
export default userSlice.reducer
export const { setName } = userSlice.actions;
