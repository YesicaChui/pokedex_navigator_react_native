import { Pressable, StyleSheet, Text, View } from 'react-native'
// import { dataTipos } from '../Data/dataTipos'
import { FlatList } from 'react-native'
import { useEffect } from 'react'
import { useGetTiposQuery } from '../app/services/pokemonServices'

const TipoPokemon = ({ navigation }) => {
  const {data:tipos} = useGetTiposQuery()

/*   useEffect(()=>{
    console.log(["Todos",...dataTipos()])
  },[]) */
  return (
    <>
      <FlatList
        style={styles.container}
        data={tipos}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Pressable style={styles.containerItem} onPress={() => navigation.navigate("List", { tipo:item.toUpperCase() })} >
            <Text>{item.toUpperCase()}</Text>
          </Pressable>
        )}
      />
    </>
  )
}

export default TipoPokemon

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom:100
  },
  containerItem: {
    width: "80%",
    marginHorizontal: "10%",
    backgroundColor: "green",
    margin: 10,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  }
})