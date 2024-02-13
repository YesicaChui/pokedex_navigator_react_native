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

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title.toUpperCase()}</Text>
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
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight:'700'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  }
})
