import { StyleSheet, Text, View } from 'react-native'
import TipoPokemon from '../Screens/TipoPokemon'
import ListPokemon from '../Screens/ListPokemon'
import DetallePokemon from '../Screens/DetallePokemon'
import Header from '../Components/Header'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()
const PokemonStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={
        ({ route }) => {
          return {
            header: () => <Header title={
              route.name === "Home" ? "Pokedex" :
                route.name === "List" ? `Pokemons ${route.params.tipo.toUpperCase()}` :
                  "Detalle Pokemon"
            } />
          }
        }
      }
    >
      <Stack.Screen name="Home" component={TipoPokemon} />
      <Stack.Screen name="List" component={ListPokemon} />
      <Stack.Screen name="Detalle Pokemon" component={DetallePokemon} />
    </Stack.Navigator>

  )
}

export default PokemonStack

const styles = StyleSheet.create({})