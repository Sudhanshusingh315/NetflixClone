import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createlist } from "./ListAPI";

export const createList = createAsyncThunk(
  "list/createlist",
  async (listData) => {
    console.log("list data is here inside the thunk", listData);
    const response = await createlist(listData);
    return response.data;
  }
);

const initialState = {
  loading: null,
};

export const ListSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) =>{
    builder.addCase(createList.pending,(state)=>{
        state.loading= true;
    })
    .addCase(createList.fulfilled,(state,action)=>{
        state.loading= false;
        console.log("recieve action",action.payload)
    })
  }
});

// Action creators are generated for each case reducer function

export default ListSlice.reducer;
