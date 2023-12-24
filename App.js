import { StyleSheet, Text, View, StatusBar} from 'react-native';
import TipoPokemon from './src/Screens/TipoPokemon';
import ListPokemon from './src/Screens/ListPokemon';
import TabNavigator from './src/navigation/TabNavigator';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={"gray"}
      />
      <TabNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
