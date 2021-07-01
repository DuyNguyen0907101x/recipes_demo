import { createSlice } from '@reduxjs/toolkit';

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    list: [],
  },
  reducers: {
    fetchRecipesSuccess: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { fetchRecipesSuccess } = recipesSlice.actions;

export default recipesSlice.reducer;
