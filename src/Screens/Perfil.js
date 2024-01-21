import { useEffect, useState } from 'react'
import { StyleSheet, Image, View } from 'react-native'
import AddButton from '../Components/AddButton'
import * as ImagePicker from 'expo-image-picker'

const Perfil = () => {

  const [image, setImage] = useState("")

  useEffect(() => {
  }, [])

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
        setImage('data:image/jpeg;base64,' + result.assets[0].base64)
      }
    }

  }


  return (
    <View style={styles.container}>
      <Image
        source={image ? { uri: image } : require("../../assets/user.png")}
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
  text: {


  }
})