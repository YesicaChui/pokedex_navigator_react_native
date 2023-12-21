import { StyleSheet, Text, View, StatusBar} from 'react-native';
import TipoPokemon from './src/Screens/TipoPokemon';
import ListPokemon from './src/Screens/ListPokemon';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={"gray"}
      />
      <Navigator />
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
