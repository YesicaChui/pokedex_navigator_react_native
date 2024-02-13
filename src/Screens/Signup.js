import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import InputForm from '../Components/InputForm'
import SubmitButton from '../Components/SubmitButton'
import { useSignupMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import { signupSchema } from '../validations/signupSchema'

const Signup = ({ navigation }) => {
  const dispatch = useDispatch()
  const [triggerSignup, { data, isError, isSuccess, error, isLoading }] = useSignupMutation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [emailError, setEmailError] = useState("")
  const [passwordError, setPasswordError] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  useEffect(() => {
    if (isSuccess) dispatch(setUser(data))
    if (isError) console.log(error)
  }, [data, isError, isSuccess])

  const onSubmit = () => {
    try {
      setEmailError("")
      setPasswordError("")
      setConfirmPasswordError("")
      signupSchema.validateSync({ email, password, confirmPassword })
      triggerSignup({ email, password })
    } catch (error) {
      switch (error.path) {
        case "email":
          setEmailError(error.message)
          break
        case "password":
          setPasswordError(error.message)
          break
        case "confirmPassword":
          setConfirmPasswordError(error.message)
          break
        default:
          break
      }
    }
  }


  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.title} >Registrarse</Text>
        <InputForm
          label="Correo Electronico"
          value={email}
          onChangeText={(t) => setEmail(t)}
          isSecure={false}
          error={emailError}
        />
        <InputForm
          label="Contraseña"
          value={password}
          onChangeText={(t) => setPassword(t)}
          isSecure={true}
          error={passwordError}
        />
        <InputForm
          label="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={(t) => setConfirmPassword(t)}
          isSecure={true}
          error={confirmPasswordError}

        />
        <SubmitButton title="Registrarse" onPress={onSubmit}
        />
        <Text style={styles.sub}>Tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("Login")}>
          <Text style={styles.subLink}>Ingresa</Text>
        </Pressable>
      </View>
    </View>
  )
}


export default Signup


// Estilos actualizados
const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8", // Fondo más suave
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
  input: {
    width: "100%",
    backgroundColor: "#F0F0F0",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});

