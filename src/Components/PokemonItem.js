import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FavoritoButton from './FavoritoButton'

const PokemonItem = ({ pokemon,navigation }) => {
  return (
    <Pressable style={styles.container}  onPress={()=>navigation.navigate("Detalle Pokemon",{id:pokemon.num})}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: pokemon.img }}
      />
      <Text style={styles.text}>{pokemon.name}</Text>
      <FavoritoButton/>
    </Pressable>
  )
}

export default PokemonItem

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 100,
    backgroundColor: "gray",
    marginHorizontal: "10%",
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30
  },
  text: {
    width: "40%",
    textAlign: "center",
    fontSize: 15,
    color:"white"
  },
  image: {
    width: 70,
    height: 70,
  }
})