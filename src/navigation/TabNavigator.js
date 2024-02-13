import { NavigationContainer } from '@react-navigation/native'
import PokemonStack from './PokemonStack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FavoritosStack from './FavoritosStack'
import { EvilIcons } from '@expo/vector-icons';
import TabIcon from '../Components/TabIcon';
import { StyleSheet } from 'react-native'
import PerfilStack from './PerfilStack';

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
      <Tab.Navigator
      initialRouteName="PokemonStack" 
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar
        }}
      >
        <Tab.Screen
          name="PokemonStack"
          component={PokemonStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon icon="tablet" label="Pokedex" focused={focused} />
          }}
        />
        <Tab.Screen
          name="FavoritosStack"
          component={FavoritosStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon icon="star-outlined" label="Favoritos" focused={focused} />
          }}
        />
        <Tab.Screen
          name="PerfilStack"
          component={PerfilStack}
          options={{
            tabBarIcon: ({ focused }) => <TabIcon icon="user" label="Perfil" focused={focused} />
          }}
        />
      </Tab.Navigator>

  )
}

export default TabNavigator

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "green",
    elevation: 4,
    position: "absolute",
    bottom: 0,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 90
  }
})