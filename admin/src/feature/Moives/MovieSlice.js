import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import { getMovies,deletemovie } from './MovieAPI'

// this is async thunk needs to dispatched only then it will be called

// FETCHING THE MOVIES
export const fetchMovies = createAsyncThunk(
  'movie/fetchMovies',
  async () => {
    const response = await getMovies();
    return response.data;
  },
)


// DELETING THE MOVIE
export const deleteMovies = createAsyncThunk(
  'movie/deletMovies',
  async(id)=>{
    await deletemovie(id);
    
  }
)


const initialState = {
    movie: null,
    loading:null,
    error:null

}

export const MovieSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
  },
  extraReducers:(builder) =>{
    // this is for fetchMovies
    builder.addCase(fetchMovies.pending,(state)=>{
      state.movie=null;
      state.loading=true;
      state.error=null;
    })
    .addCase(fetchMovies.fulfilled,(state,action)=>{
      state.movie=action.payload;
      state.loading=false;
      state.error= null;
    })
    .addCase(fetchMovies.rejected,(state,action)=>{
      state.movie =null;
      state.loading=false;
      state.error = action.error;
    })
    .addCase(deleteMovies.pending,(state)=>{
      state.loading = true;
    })
    .addCase(deleteMovies.fulfilled,(state)=>{
      state.loading = false;
    })
  }
})

// Action creators are generated for each case reducer function

export default MovieSlice.reducer