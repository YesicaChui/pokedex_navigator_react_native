import { FlatList, StyleSheet, Text, View } from 'react-native'
import allPokemon from '../Data/pokemon.json'
import PokemonItem from '../Components/PokemonItem'
import { useState } from 'react'
import PokemonCard from '../Components/PokemonCard'

const FavoritosPokemons = () => {
  const [pokemons, setPokemons] = useState(allPokemon.pokemon)
  return (
    <FlatList
    style={styles.container}
    data={pokemons}
    numColumns={2}
    keyExtractor={item => item.num}
    renderItem={({ item }) => <PokemonCard pokemon={item}/>}
  />
  )
}

export default FavoritosPokemons

const styles = StyleSheet.create({})