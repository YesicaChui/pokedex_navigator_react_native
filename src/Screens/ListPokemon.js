import { FlatList, StyleSheet, Text, View } from 'react-native'
import allPokemon from '../Data/pokemon.json'
import { useEffect, useState } from 'react'
import PokemonItem from '../Components/PokemonItem'
import { useSelector } from 'react-redux'

const ListPokemon = ({navigation,route}) => {
  const [pokemons, setPokemons] = useState(allPokemon.pokemon)
  const { tipo } = route.params

  useEffect(() => {
    if(tipo!="TODOS"){
      const pokemonFiltered = pokemons.filter(pokemon => pokemon.type.includes(tipo.toLowerCase()))
      setPokemons(pokemonFiltered)
    }
  }, [])
  return (
    <FlatList
      style={styles.container}
      data={pokemons}
      keyExtractor={item => item.num}
      renderItem={({ item }) => <PokemonItem pokemon={item} navigation={navigation} />}
    />
  )
}

export default ListPokemon

const styles = StyleSheet.create({})