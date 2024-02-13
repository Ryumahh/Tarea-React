import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  films: [],
  isLoading: false,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    startLoadingFilms: (state) => {
      state.isLoading = true;
    },
    setFilms: (state, action) => {
      state.isLoading = false;
      state.films = action.payload.films;
    },
    otherAction: (state) => {
      console.log("TODO");
    },
  },
});

export const { startLoadingFilms, setFilms, otherAction } = filmsSlice.actions;

export default filmsSlice.reducer;
