import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isGptSearchVisible: false,
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.isGptSearchVisible = !state.isGptSearchVisible;
    },
  },
});
export const { toggleGptSearch } = gptSlice.actions;
export default gptSlice.reducer;
