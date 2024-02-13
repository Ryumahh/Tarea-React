import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: true,
  films: [],
};

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoading = true;
    },
    setFilms: (state, action) => {
      state.films = action.payload.films;
      state.isLoading = false;
    },
  },
});

export const { startLoading, setFilms } = homeSlice.actions;

export default homeSlice.reducer;
