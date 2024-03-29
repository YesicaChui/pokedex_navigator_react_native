import { createSlice } from '@reduxjs/toolkit'

export const favoritosSlice = createSlice({
    name:"favoritos",
    initialState:{
        value:[]
    },
    reducers:{
        updateListaFavoritos: (state, action) => {
            const pokemon = action.payload;
            const index = state.value.findIndex((favorito) => favorito.num === pokemon.num);
      
            if (index === -1) {
              state.value.push(pokemon);
            } else {
              state.value.splice(index, 1);
            }
          },    
          updateAllFavoritos: (state, action) => {
            state.value = action.payload; // Sustituir la lista completa de favoritos
        },
    }
})

export const {updateListaFavoritos,updateAllFavoritos} = favoritosSlice.actions

export default favoritosSlice.reducer