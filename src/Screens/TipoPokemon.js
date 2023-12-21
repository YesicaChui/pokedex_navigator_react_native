import { StyleSheet, Text, View } from 'react-native'
import {dataTipos} from '../Data/dataTipos'
import { FlatList } from 'react-native'

const TipoPokemon = () => {
  return (
    <>
      <FlatList
        style={styles.container}
        data={dataTipos()}
        keyExtractor={item => item}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </>
  )
}

export default TipoPokemon

const styles = StyleSheet.create({
  container:{
      width:"100%",
      
  }
})