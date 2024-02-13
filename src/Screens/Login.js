import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import InputForm from '../Components/InputForm';
import SubmitButton from '../Components/SubmitButton';
import { useLoginMutation } from '../app/services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/auth/authSlice';
import { insertSession } from '../database';
import { signupSchema } from '../validations/signupSchema';

const Login = ({ navigation }) => {
  const dispatch = useDispatch();
  const [triggerLogin, { data, isError, isSuccess, error, isLoading }] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
      insertSession(data)
        .then(result => console.log(result))
        .catch(err => console.log(err));
    }
    if (isError) {
      // Manejo de errores de autenticación
      if (error.status === 400) {
        // Error de correo electrónico o contraseña incorrectos
        Alert.alert('Error', 'Correo electrónico o contraseña incorrectos');
      } else {
        // Otros errores de autenticación
        Alert.alert('Error', 'Error al iniciar sesión');
      }
    }
  }, [data, isError, isSuccess, error]);

  const onSubmit = () => {
      triggerLogin({ email, password });
  };

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title}>Ingresa al Pokedex</Text>
        <InputForm
          label="Correo electrónico"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error=""
        />
        <InputForm
          label="Contraseña"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error=""
        />
        <SubmitButton onPress={onSubmit} title="Enviar" />
        <Text style={styles.sub}>¿No tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Signup")}>
          <Text style={styles.subLink}>Regístrate</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
  },
  container: {
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontFamily: "Roboto",
    marginBottom: 20,
  },
  sub: {
    fontSize: 14,
    fontFamily: "Roboto",
    marginBottom: 10,
  },
  subLink: {
    fontSize: 14,
    fontFamily: "Roboto",
    color: "blue",
    textDecorationLine: "underline",
  },
});
