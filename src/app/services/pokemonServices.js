import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'

export const pokemonApi = createApi({
  reducerPath:'pokemonApi',
  baseQuery:fetchBaseQuery({baseUrl:base_url}),
  tagTypes:["image"],
  endpoints:(builder)=>({
    getPokemons:builder.query({
      query: (name) => `pokemon.json`,
    }),
    getPokemon:builder.query({
      query: (id) => `pokemon/${id}.json`,
    }),
    getTipos: builder.query({
      query: (name) => `tipos.json`,
    }),
    postProfileImage: builder.mutation({
      query: ({localId,image}) => {
        console.log("Preparando para enviar datos a Firebase:", { localId });

        return {
        url:`profileImage/${localId}.json`,
        method:"PUT",
        body:{image}
      }
    },
      invalidatesTags:["image"],
      onError: (error, { dispatch, queryFulfilled }) => {
        // Manejo de errores aquí
        console.error('Error en la solicitud de postProfileImage:', error);
        // Puedes disparar una acción para actualizar el estado de Redux para reflejar el error
        // dispatch(accionDeError(error));
      },      
      onSettled: (data, error, { dispatch }) => {
        console.log("ingrese")
        if (!error) {
          // La solicitud fue exitosa, puedes tomar acciones aquí
          console.log('Solicitud de postProfileImage exitosa:', data);
          // Puedes disparar una acción para actualizar el estado de Redux para reflejar el éxito
          // dispatch(accionDeExito(data));
        }
      }
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags:["image"]
    }),
  })
})

export const {useGetPokemonQuery,useGetPokemonsQuery,useGetTiposQuery,usePostProfileImageMutation,useGetProfileImageQuery }=pokemonApi