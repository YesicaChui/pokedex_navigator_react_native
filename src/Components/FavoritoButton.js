import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';

const FavoritoButton = () => {
  const [favoritoSelected, setfavoritoSelected] = useState(false)
  return (
    <Pressable onPress={() => setfavoritoSelected(!favoritoSelected)}>
      <Entypo name={favoritoSelected ? "star" : "star-outlined"} size={44} color="black" />
    </Pressable>
  )
}

export default FavoritoButton

const styles = StyleSheet.create({})