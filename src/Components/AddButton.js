import { StyleSheet, Text, View,Pressable } from 'react-native'

const AddButton = ({title,onPress}) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}


export default AddButton


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#40513B',
        width:"70%",
        paddingVertical: 12,
        margin:10,
        borderRadius: 8,
    },
    text:{
        color:"white",
        textAlign:"center",
        fontSize:18,
        fontWeight: "bold", 
    }
})
