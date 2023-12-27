import { Image, StyleSheet, Text, View } from 'react-native';
import FavoritoButton from './FavoritoButton';

const PokemonCard = ({ pokemon }) => {
  return (
    <View style={styles.cardContainer}>
      <Image style={styles.image} resizeMode='cover' source={{ uri: pokemon.img }} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.types}>{pokemon.type.join(' / ')}</Text>
      <FavoritoButton />
    </View>
  );
};

export default PokemonCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150, // Ajusta la altura según tus necesidades
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 8,
    textAlign: 'center',
    textTransform:'capitalize'
  },
  types: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 8,
    textTransform:'capitalize'
  },
});
