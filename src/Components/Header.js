import { StyleSheet, Text, View, Image } from 'react-native';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetProfileImageQuery } from '../app/services/pokemonServices';

const Header = ({ title = "Inicio" }) => {
  const [profileImage, setProfileImage] = useState("")
  const localId = useSelector(state => state.auth.value.localId)
  const { data, isSuccess } = useGetProfileImageQuery(localId)

  useEffect(() => {
    if (isSuccess && data) setProfileImage(data.image)
  }, [isSuccess,data])

  console.log(profileImage?.substring(0,30))
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {profileImage ? (
        <Image source={{ uri: profileImage }} style={styles.image} resizeMode="cover" />
      ) : <Image
        source={require("../../assets/user.png")}
        style={styles.image}
        resizeMode='cover'

      />}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray",
    width: "100%",
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: 'row',
    paddingHorizontal: 30
  },
  text: {
    fontSize: 20,
  },
  image: {
    width: 40,
    height: 40
  }
})
