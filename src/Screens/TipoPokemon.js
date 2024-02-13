import { Pressable, StyleSheet, Text, View } from 'react-native'
// import { dataTipos } from '../Data/dataTipos'
import { FlatList } from 'react-native'
import { useEffect } from 'react'
import { useGetFavoritosQuery, useGetTiposQuery } from '../app/services/pokemonServices'
import { useDispatch, useSelector } from 'react-redux'
import { updateAllFavoritos } from '../features/favoritos/favoritosSlice'

const TipoPokemon = ({ navigation }) => {
  const {data:tipos} = useGetTiposQuery()
  const dispatch = useDispatch();
  const localId = useSelector(state => state.auth.value.localId)
  const { data: favoritos, isLoadingFavoritos } = useGetFavoritosQuery(localId);
  useEffect(() => {
    if (!isLoadingFavoritos) {
      console.log(localId)
      console.log(favoritos)
      console.log("se actulizo los favoritos")
      dispatch(updateAllFavoritos(favoritos||[]));
    }

  }, [favoritos])
  return (
    <>
      <View style={styles.container}>
        <FlatList         
          data={tipos}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Pressable style={styles.tipoContainer} onPress={() => navigation.navigate("List", { tipo:item.toUpperCase() })} >
              <Text style={styles.tipoText}>{item.toUpperCase()}</Text>
            </Pressable>
          )}
        />
      </View>
    </>
  )
}

export default TipoPokemon

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 20,
    marginBottom:100
  },
  tipoContainer: {
    backgroundColor: '#FFCC00',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  tipoText: {
    fontSize: 18,
    fontFamily: 'Roboto',
    color: '#333',
    fontWeight:'700'
  },
});