import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { background_path, Configuration } from "./DataAPI";

// Fetching all the configuration for images
export const fetchingConfiguration = createAsyncThunk(
  "configure/fetchingConfiguration",
  async (url) => {
    console.log("inside fetch configuration");
    const response = await Configuration();
    return response;
  }
);

// Fetching all the Images for backdrop for herobanner
// export const fetchBackgroundPath = createAsyncThunk(
//   "data/fetchbackgroundPath",
//   async (endpoint) => {
//     // needs to remove this

//     console.log("inside thunk");
//     console.log(endpoint);
//     const response = await background_path(endpoint);
//     return response;
//   }
// );
const initialState = {
  value: false, // we will see what we need to do with this later
  status: false, // this is just for handling loaders
  url: {}, // this hold the base url or POSTER to work
};

export const DataSlice = createSlice({
  name: "dataslice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchBackgroundPath.pending, (state) => {
    //   // Add user to the state array
    //   state.status = "loading";
    // });
    // builder.addCase(fetchBackgroundPath.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.value = action.payload;
    // });
    builder.addCase(fetchingConfiguration.fulfilled, (state, action) => {
      // Add user to the state array
      state.url = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default DataSlice.reducer;
