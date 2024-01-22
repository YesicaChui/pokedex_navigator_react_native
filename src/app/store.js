import { configureStore } from '@reduxjs/toolkit'
import favoritoReducer from '../features/favoritos/favoritosSlice'
import userReducer from '../features/users/userSlice'; 
export const store = configureStore({
  reducer: {
    favoritos: favoritoReducer,
    user: userReducer, 
  },
})