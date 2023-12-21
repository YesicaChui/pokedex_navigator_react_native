import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PokemonItem = ({ pokemon }) => {
  return (
    <Pressable style={styles.container} >
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{ uri: pokemon.img }}
      />
      <Text style={styles.text}>{pokemon.name}</Text>
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
    width: "60%",
    textAlign: "center",
    fontSize: 20,
    color:"white"
  },
  image: {
    minWidth: 90,
    height: 90,
    width: "30%"
  }
})