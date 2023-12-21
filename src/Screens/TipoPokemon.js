import { Pressable, StyleSheet, Text, View } from 'react-native'
import { dataTipos } from '../Data/dataTipos'
import { FlatList } from 'react-native'

const TipoPokemon = ({ navigation }) => {
  return (
    <>
      <FlatList
        style={styles.container}
        data={["Todos",...dataTipos()]}
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