import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFilmDetails = createAsyncThunk('filmDetails/fetchFilmDetails', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9ebbf65c80c0e6ee15f83825a6422dd5&language=es`);
    const movieDetails = response.data;
    return movieDetails;
  } catch (error) {
    return rejectWithValue('No se pudieron cargar los detalles de la película');
  }
});

export const filmDetailsSlice = createSlice({
  name: 'filmDetails',
  initialState: {
    details: null,
    loading: false,
    error: null,
  },
  reducers: {
    setFilmDetails: (state, action) => {
      state.details = action.payload;
      state.loading = false;
      state.error = null;
    },
    setFilmDetailsLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setFilmDetailsError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilmDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilmDetails.fulfilled, (state, action) => {
        state.details = action.payload;
        state.loading = false;
      })
      .addCase(fetchFilmDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFilmDetails, setFilmDetailsLoading, setFilmDetailsError } = filmDetailsSlice.actions;
