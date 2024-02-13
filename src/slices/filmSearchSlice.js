import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  searchResults: [],
};

export const filmSearchSlice = createSlice({
  name: 'filmSearch',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setResults: (state, action) => {
      state.searchResults = action.payload.results;
      state.isLoading = false;
    },
  },
});

export const { startLoading, setResults } = filmSearchSlice.actions;

export default filmSearchSlice.reducer;
