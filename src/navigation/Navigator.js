import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TipoPokemon from '../Screens/TipoPokemon'
import ListPokemon from '../Screens/ListPokemon'
import DetallePokemon from '../Screens/DetallePokemon'
import Header from '../Components/Header'
const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
        initialRouteName='Home'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title={
                                        route.name === "Home" ? "Pokedex" :
                                        route.name === "List" ? `Pokemons ${route.params.tipo.toUpperCase()}` :
                                        "Detalle Pokemon"
                    }               />
                }
            }
        }
    >
      <Stack.Screen name="Home" component={TipoPokemon} />
      <Stack.Screen name="List" component={ListPokemon} />
      <Stack.Screen name="Detalle Pokemon" component={DetallePokemon} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigator

