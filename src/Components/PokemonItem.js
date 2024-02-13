import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavoritoButton from './FavoritoButton'

const PokemonItem = ({ pokemon,navigation }) => {
  return (
    <Pressable style={styles.container}  onPress={()=>navigation.navigate("Detalle Pokemon",{pokemon:pokemon})}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: pokemon.img }}
      />
      <Text style={styles.text}>{pokemon.name.toUpperCase()}</Text>
      <FavoritoButton pokemon={pokemon}/>
    </Pressable>
  )
}

export default PokemonItem

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 100,
    backgroundColor: "#394867",
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    flex: 1,
        textAlign: "center",
        fontSize: 18,
        color:"white",

  },
  image: {
    width: 70,
    height: 70,
  }
})