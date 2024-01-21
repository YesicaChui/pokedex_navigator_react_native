import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../Components/Header'
import Perfil from '../Screens/Perfil'

const Stack = createNativeStackNavigator()
const PerfilStack = () => {
  return (
    <Stack.Navigator
        initialRouteName='MiPerfil'
        screenOptions={
            ({route})=>{
                return {
                    header : () => <Header title="Perfil"/>
                }
            }
        }
    >
        <Stack.Screen name="MiPerfil" component={Perfil} />
    </Stack.Navigator>
  )
}

export default PerfilStack

