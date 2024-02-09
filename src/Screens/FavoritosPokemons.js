import { Button, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import PokemonCard from '../Components/PokemonCard'
import { useSelector } from 'react-redux'
import { usePostFavoritosMutation } from '../app/services/pokemonServices'

const FavoritosPokemons = ({ navigation, route }) => {
  const localId = useSelector(state => state.auth.value.localId)
  const PokemonFavoritos = useSelector((state) => state.favoritos.value)
  const [triggerPostFavoritos,{data,isSuccess,isError,error}] = usePostFavoritosMutation()
  
  const onPress = () => {
    triggerPostFavoritos({localId,favoritos:PokemonFavoritos})
  }
  return (
    <>
      <View style={styles.container2}>
        <Button onPress={onPress} title='Guardar Pokemon favoritos' color={'orange'} />
      </View>
      <FlatList
        style={styles.container}
        data={PokemonFavoritos}
        numColumns={2}
        keyExtractor={item => item.num}
        renderItem={({ item }) => <PokemonCard pokemon={item} navigation={navigation} />}
      />

    </>
  )
}

export default FavoritosPokemons

const styles = StyleSheet.create({
  container: {
    marginBottom: 100
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10
  },
})