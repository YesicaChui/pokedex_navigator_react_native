import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from '../../firebase/db'

export const pokemonApi = createApi({
  reducerPath:'pokemonApi',
  baseQuery:fetchBaseQuery({baseUrl:base_url}),
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
  })
})

export const {useGetPokemonQuery,useGetPokemonsQuery,useGetTiposQuery}=pokemonApi