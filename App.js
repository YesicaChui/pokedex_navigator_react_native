import { StyleSheet, Text, View, StatusBar} from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import { store } from './src/app/store'
import { Provider } from 'react-redux'

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={"gray"}
      />
       <Provider store={store}>
        <TabNavigator/>
      </Provider>
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
