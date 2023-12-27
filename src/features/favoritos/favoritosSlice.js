import { createSlice } from '@reduxjs/toolkit'

export const favoritosSlice = createSlice({
    name:"favoritos",
    initialState:{
        value:[]
    },
    reducers:{
        addPokemon: (state,action) => {
            console.log(action.payload)
        },
        removePokemon: (state,action) =>{
          console.log(action.payload)
        },        
    }
})

export const {addPokemon,removePokemon} = favoritosSlice.actions

export default favoritosSlice.reducer