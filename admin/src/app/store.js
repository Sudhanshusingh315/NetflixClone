import { configureStore } from '@reduxjs/toolkit'
import Authslice from '../feature/Auth/Authslice';
import MovieSlice from '../feature/Moives/MovieSlice';
const store = configureStore({
  reducer: {
    auth: Authslice,
    movie:MovieSlice,
  },
});

export default store;