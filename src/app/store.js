import { configureStore } from '@reduxjs/toolkit'
import favoritoReducer from '../features/favoritos/favoritosSlice'
import userReducer from '../features/users/userSlice'; 
import { pokemonApi } from './services/pokemonServices';
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    favoritos: favoritoReducer,
    user: userReducer,
    [pokemonApi.reducerPath]:pokemonApi.reducer, 
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware),
})

setupListeners(store.dispatch)