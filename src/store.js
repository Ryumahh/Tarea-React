import { configureStore } from '@reduxjs/toolkit';
import { filmsSlice } from './slices/filmsSlice';
import { filmDetailsSlice } from './slices/filmDetailsSlice';

export default configureStore({
  reducer: {
    films: filmsSlice.reducer,
    filmDetails: filmDetailsSlice.reducer,
  },
});
