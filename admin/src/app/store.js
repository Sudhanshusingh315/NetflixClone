import { configureStore } from '@reduxjs/toolkit'
import Authslice from '../feature/Auth/Authslice';

const store = configureStore({
  reducer: {
    auth: Authslice,
  },
});

export default store;