import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies, deletemovie, createmovie } from "./MovieAPI";

// this is async thunk needs to dispatched only then it will be called

// FETCHING THE MOVIES [get]
export const fetchMovies = createAsyncThunk("movie/fetchMovies", async () => {
  const response = await getMovies();
  return response.data;
});

// DELETING THE MOVIE [delete]
export const deleteMovies = createAsyncThunk(
  "movie/deletMovies",
  async (id) => {
    await deletemovie(id);

    return id;
  }
);

// CREATEING THE MOVIE [post]
export const createMovie = createAsyncThunk(
  "movie/createMovie",
  async (movieInfo) => {
    console.log("inside thunk", movieInfo);
    const res = await createmovie(movieInfo);
    return res.data;
  }
);

const initialState = {
  movie: null,
  loading: null,
  error: null,
};

export const MovieSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // this is for fetchMovies
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.movie = null;
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movie = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.movie = null;
        state.loading = false;
        state.error = action.error;
      })
      .addCase(deleteMovies.pending, (state) => {
        // state.loading = true;
      })
      .addCase(deleteMovies.fulfilled, (state, action) => {
        // state.loading = false;
        console.log("this is my action.payload", action.payload);
        console.log("this is their type", typeof action.payload);
        const itemsAfterDelete = state.movie.filter(
          (item) => item._id !== action.payload
        );
        console.log(itemsAfterDelete);
        //  state.movie = itemsAfterDelete;
      })
      .addCase(deleteMovies.rejected, (state,action) => {
        // state.loading = false;
        console.log(action.error);
        
      })
      .addCase(createMovie.fulfilled, (state, action) => {
        console.log("action has arriver with payload", action.payload);
      })
      .addCase(createMovie.rejected, (state, action) => {
        console.log(
          "action has some error returned with an error",
          action.error
        );
      });
  },
});

// Action creators are generated for each case reducer function

export default MovieSlice.reducer;
