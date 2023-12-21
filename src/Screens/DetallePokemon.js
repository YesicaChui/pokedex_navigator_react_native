import { Image, StyleSheet, Text, View } from 'react-native'
import allPokemon from '../Data/pokemon.json'
import { useEffect, useState } from 'react'

const DetallePokemon = ({ route }) => {
  const { id } = route.params
  const [pokemon, setPokemon] = useState({})
  useEffect(() => {

    const PokemonEncontrado = allPokemon.pokemon.find(pokemon => pokemon.num === id)
    setPokemon(PokemonEncontrado)

  }, [id])
  return (
    <View  style={styles.contain}>
      <Image
        style={styles.image}
        resizeMode='contain'
        source={{ uri: pokemon.img }}
      />
      <Text  style={styles.title}>{pokemon.name}</Text>
      <Text>{pokemon.about}</Text>
    </View>
  )
}

export default DetallePokemon

const styles = StyleSheet.create({
  contain:{
    alignItems:'center'
  },
  image:{
    width:200,
    height:200
  },
  title:{
    fontSize:25,
    fontWeight:'700',
    textTransform:'capitalize'
  }
})