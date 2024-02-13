import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const MiSpinner = () => {
  return (
    <View style={styles.container}> 
      <ActivityIndicator size={80} color="blue"/>
    </View>
  )
}

export default MiSpinner

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

})
