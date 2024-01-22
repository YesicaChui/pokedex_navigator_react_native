import { StyleSheet, Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import * as FileSystem from 'expo-file-system';
import { useSelector, useDispatch } from 'react-redux';
import { selectProfileImage, setProfileImage } from '../features/users/userSlice';

const Header = ({ title = "Inicio" }) => {
  const dispatch = useDispatch();

  const profileImage = useSelector(selectProfileImage);

  useEffect(() => {
    const loadProfileImage = async () => {
      try {
        const storedImagePath = await AsyncStorage.getItem('rutaFotoPerfil');
        console.log(storedImagePath)
        if (storedImagePath) {
          const base64Image = await FileSystem.readAsStringAsync(storedImagePath, { encoding: FileSystem.EncodingType.Base64 });
          dispatch(setProfileImage('data:image/jpeg;base64,'+base64Image));
        }
      } catch (error) {
        console.error('Error al cargar la imagen del perfil:', error);
      }
    };

    loadProfileImage();
  }, []);
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
