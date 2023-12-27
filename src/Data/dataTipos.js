import data from "../Data/pokemon.json"

export const dataTipos = () => {
  let allTypes = [];
  data.pokemon.forEach(pokemon => {
    // Recorrer los tipos del Pokémon actual
    pokemon.type.forEach(type => {
      // Agregar el tipo al nuevo arreglo solo si no está presente
      if (!allTypes.includes(type)) {
        allTypes.push(type);
      }
    });
  });
  return allTypes
}