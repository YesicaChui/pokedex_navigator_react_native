import { FlatList, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import PokemonItem from '../Components/PokemonItem'
import { useGetPokemonsQuery } from '../app/services/pokemonServices'

const ListPokemon = ({ navigation, route }) => {
  const { data, isLoading } = useGetPokemonsQuery()

  const [pokemons, setPokemons] = useState([])
  const { tipo } = route.params


  useEffect(() => {
    if (!isLoading) {
      if (tipo != "TODOS") {
        const pokemonFiltered = data.filter(pokemon => pokemon.type.includes(tipo.toLowerCase()))
        setPokemons(pokemonFiltered)
      } else {
        setPokemons(data)
      }
    }

  }, [data])



  return (
    <>
      {

        pokemons.length ? <FlatList
          style={styles.container}
          data={pokemons}
          keyExtractor={item => item.num}
          renderItem={({ item }) => <PokemonItem pokemon={item} navigation={navigation} />}
        /> : ""
      }
    </>
  )
}

export default ListPokemon

const styles = StyleSheet.create({
  container: {
    marginBottom: 100
  }
})