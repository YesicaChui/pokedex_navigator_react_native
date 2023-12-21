import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TipoPokemon from './src/Screens/TipoPokemon';

export default function App() {
  return (
    <View style={styles.container}>
      <TipoPokemon/>
    </View>
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
