import { FlatList, StyleSheet, Text, View } from 'react-native'
import PokemonCard from '../Components/PokemonCard'
import { useSelector } from 'react-redux'

const FavoritosPokemons = () => {
  const PokemonFavoritos = useSelector((state)=>state.favoritos.value)
  return (
    <FlatList
    style={styles.container}
    data={PokemonFavoritos}
    numColumns={2}
    keyExtractor={item => item.num}
    renderItem={({ item }) => <PokemonCard pokemon={item}/>}
  />
  )
}

export default FavoritosPokemons

const styles = StyleSheet.create({
  container:{
    marginBottom:100
  }
})