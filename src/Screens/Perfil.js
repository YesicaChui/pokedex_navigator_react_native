import { StyleSheet, Image, View, Text } from 'react-native'
import AddButton from '../Components/AddButton'
import * as ImagePicker from 'expo-image-picker'
// import * as FileSystem from 'expo-file-system';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
// import { selectProfileImage, setProfileImage } from '../features/users/userSlice';
import { useGetProfileImageQuery, usePostProfileImageMutation } from '../app/services/pokemonServices';
import { useEffect, useState } from 'react';
import { clearUser } from '../features/auth/authSlice'
const Perfil = () => {
  const dispatch = useDispatch()
  const [profileImage, setProfileImage] = useState("")
  const [triggerProfileImage] = usePostProfileImageMutation()
  const localId = useSelector(state => state.auth.value.localId)
  const email = useSelector(state => state.auth.value.email)
  const { data, isSuccess } = useGetProfileImageQuery(localId)

  useEffect(() => {
    if (isSuccess && data) setProfileImage(data.image)
  }, [isSuccess])

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
        const image = 'data:image/jpeg;base64,' + result.assets[0].base64
       triggerProfileImage({ localId, image })
        setProfileImage(image)
        console.log(localId)
      }
    }

  }

  const cerrarSesion = ()=>{
    dispatch(clearUser())
  }


  return (
    <View style={styles.container}>

      <Image
        source={profileImage ? { uri: profileImage } : require("../../assets/user.png")}
        style={styles.image}
        resizeMode='cover'

      />
      <AddButton title="Tomar foto" onPress={pickImage} />
      <Text>{email}</Text>
      <AddButton title="Cerrar Sesion" onPress={cerrarSesion} />
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