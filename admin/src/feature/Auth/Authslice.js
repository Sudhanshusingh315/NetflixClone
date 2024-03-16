import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {login} from './AuthAPI';
// Creating first thunk
export const logintunk = createAsyncThunk(
    'auth/loginthunkStatus',
    async (userCredentials) => {
      const res =  await login(userCredentials);
      const response = await res.data;
      console.log("This is res",res) 
      console.log("This is response",response);
      localStorage.setItem("user",response);
      return response;

    },
  )

const initialState = {
  loading:false,
  user:null,
  error:null,  
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers:(builder) =>{
    builder
    .addCase(logintunk.pending,(state)=>{
      state.loading = true;
      state.error=null;
      state.user=null;
    })
    .addCase(logintunk.fulfilled,(state,action)=>{
      state.loading = false;
      state.error=false;
      state.user = action.payload;
      
    })
    .addCase(logintunk.rejected,(state,action)=>{
      state.loading = false;
      console.log("this is error action provided",action.error)
      state.error = action.error.message;
      state.user = null;
    })
  },
})

// Action creators are generated for each case reducer function

export default AuthSlice.reducer