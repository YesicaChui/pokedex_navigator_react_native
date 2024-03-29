import { configureStore } from '@reduxjs/toolkit'
import favoritoReducer from '../features/favoritos/favoritosSlice'
import userReducer from '../features/users/userSlice'; 
import { pokemonApi } from './services/pokemonServices';
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    favoritos: favoritoReducer,
    user: userReducer,
    auth:authReducer,
    [pokemonApi.reducerPath]:pokemonApi.reducer, 
    [authApi.reducerPath]: authApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(pokemonApi.middleware,authApi.middleware),
})

setupListeners(store.dispatch)