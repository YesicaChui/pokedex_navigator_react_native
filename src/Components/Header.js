import { StyleSheet, Text, View} from 'react-native'

const Header = ({title = "Inicio"}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        backgroundColor:"gray",
        width:"100%",
        height:80,
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:20,
    }
})
