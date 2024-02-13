import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import FavoritoButton from '../Components/FavoritoButton'
import { useEffect } from 'react'

const DetallePokemon = ({ route }) => {
  const { pokemon } = route.params

  useEffect(() => { }, [
    console.log(pokemon.stats)
  ])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.contain}>
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{ uri: pokemon.img }}
        />
        <View style={styles.favoritoBox}>
          <Text style={styles.title}>{pokemon.name}</Text>
          <FavoritoButton pokemon={pokemon} />
        </View>
        <Text style={styles.description}>{pokemon.about}</Text>
        <View style={styles.statsContainer}>
          <Text>Ataque: {pokemon.stats["base-attack"]}</Text>
          <Text>Defensa: {pokemon.stats["base-defense"]}</Text>
          <Text>Stamina: {pokemon.stats["base-stamina"]}</Text>
        </View>
        <View style={styles.typeContainer}>
          <Text>Tipo: {pokemon.type.join(', ')}</Text>
        </View>
        <Text>Movimientos:</Text>
        <View style={styles.movesContainer}>
          {pokemon["special-attack"].map(move => (
            <Text key={move.name}>{move.name}: {move["base-damage"]} ({move.type})</Text>
          ))}
        </View>


      </View>
    </ScrollView>
  )
}

export default DetallePokemon

const styles = StyleSheet.create({
  contain: {
    alignItems: 'center',
    padding: 20,
    marginBottom: 100
  },
  image: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: 25,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  description: {
    marginBottom: 20,
    paddingHorizontal: 20,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  statsContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    gap: 20
  },
  typeContainer: {
    marginBottom: 10,
  },
  movesContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    columnGap: 20,
    flexWrap: 'wrap',
    justifyContent: 'center',

  },
  favoritoBox: {
    flexDirection: 'row',
    width: "100%",
    justifyContent: 'space-between',
    paddingHorizontal:20
  }
})