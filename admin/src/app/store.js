import { configureStore } from '@reduxjs/toolkit'
import Authslice from '../feature/Auth/Authslice';
import MovieSlice from '../feature/Moives/MovieSlice';
import ListSlice from '../feature/List/ListSlice';
const store = configureStore({
  reducer: {
    auth: Authslice,
    movie:MovieSlice,
    list:ListSlice
  },
});

export default store;