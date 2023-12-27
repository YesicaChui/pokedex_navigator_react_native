import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { updateListaFavoritos } from '../features/favoritos/favoritosSlice';

const FavoritoButton = ({ pokemon }) => {
  const dispatch = useDispatch()
  const PokemonFavoritos = useSelector((state) => state.favoritos.value)
  const esFavorito = () => PokemonFavoritos.some((favorito) => favorito.num === pokemon.num);

  const [favoritoSelected, setfavoritoSelected] = useState(esFavorito())

  useEffect(() => {
    setfavoritoSelected(esFavorito());
  }, [PokemonFavoritos,pokemon])

  const actualizarListaFavoritos = () => {
    dispatch(updateListaFavoritos(pokemon));
    setfavoritoSelected(!favoritoSelected)
  }
  return (
    <Pressable onPress={() => actualizarListaFavoritos()}>
      <Entypo name={favoritoSelected ? "star" : "star-outlined"} size={44} color="black" />
    </Pressable>
  )
}

export default FavoritoButton

const styles = StyleSheet.create({})