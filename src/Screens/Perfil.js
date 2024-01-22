import { StyleSheet, Image, View } from 'react-native'
import AddButton from '../Components/AddButton'
import * as ImagePicker from 'expo-image-picker'
import * as FileSystem from 'expo-file-system';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch,useSelector } from 'react-redux';
import { selectProfileImage,setProfileImage  } from '../features/users/userSlice';


const Perfil = () => {
  const dispatch = useDispatch();
  const profileImage = useSelector(selectProfileImage);
  const pickImage = async () => {

    const { granted } = await ImagePicker.requestCameraPermissionsAsync()

    if (granted) {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.3,
        base64: true
      })

      if (!result.canceled) {
        const rutaImagen = `${FileSystem.documentDirectory}foto_perfil.jpg`;
        await FileSystem.writeAsStringAsync(
          rutaImagen,
          result.assets[0].base64,
          { encoding: FileSystem.EncodingType.Base64 }
        );
        await AsyncStorage.setItem('rutaFotoPerfil', rutaImagen);
        dispatch(setProfileImage('data:image/jpeg;base64,' + result.assets[0].base64));
      }
    }

  }


  return (
    <View style={styles.container}>
      <Image
        source={profileImage ? { uri: profileImage } : require("../../assets/user.png")}
        style={styles.image}
        resizeMode='cover'

      />
      <AddButton title="Tomar foto" onPress={pickImage} />
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20
  },
  image: {
    width: 200,
    height: 200
  },
})