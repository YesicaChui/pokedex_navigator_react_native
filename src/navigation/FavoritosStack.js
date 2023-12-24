import { StyleSheet, Text, View } from 'react-native'
import FavoritosPokemons from '../Screens/FavoritosPokemons'
import Header from '../Components/Header'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const FavoritosStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='Favorito'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Favorito"/>
                }
            }
        }
    >
        <Stack.Screen name="Favorito" component={FavoritosPokemons} />
    </Stack.Navigator>
  )
}

export default FavoritosStack

const styles = StyleSheet.create({})