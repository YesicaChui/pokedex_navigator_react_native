import { StyleSheet, Text, View, StatusBar} from 'react-native';
import TabNavigator from './src/navigation/TabNavigator';
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import Signup from './src/Screens/Signup';
import Login from './src/Screens/Login';
import MainNavigator from './src/navigation/MainNavigator';
import { init } from './src/database';

init()
.then(() => console.log("DB Initialized"))
.catch(err => console.log(err))


export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={"gray"}
      />
       <Provider store={store}>
        <MainNavigator/>
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
