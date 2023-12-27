import { configureStore } from '@reduxjs/toolkit'
import favoritoReducer from '../features/favoritos/favoritosSlice'

export const store = configureStore({
  reducer: {
    favoritos: favoritoReducer
  },
})