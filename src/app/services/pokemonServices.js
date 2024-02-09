import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ["image"],
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (name) => `pokemon.json`,
    }),
    getPokemon: builder.query({
      query: (id) => `pokemon/${id}.json`,
    }),
    getTipos: builder.query({
      query: (name) => `tipos.json`,
    }),
    postFavoritos: builder.mutation({
      query: ({ localId, favoritos }) => ({
        url: `favoritos/${localId}.json`,
        method: "PUT",
        body: favoritos
      }),
    }),

    postProfileImage: builder.mutation({
      query: ({ localId, image }) => {
        return {
          url: `profileImage/${localId}.json`,
          method: "PUT",
          body: { image }
        }
      },
      invalidatesTags: ["image"],
    }),
    getProfileImage: builder.query({
      query: (localId) => `profileImage/${localId}.json`,
      providesTags: ["image"]
    }),
  })
})

export const { useGetPokemonQuery, useGetPokemonsQuery, useGetTiposQuery, usePostProfileImageMutation, useGetProfileImageQuery, usePostFavoritosMutation } = pokemonApi