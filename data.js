// estas funciones son de ejemplo

export const name = () => {
  return 'name';
};

export const status = function alive (arrayPersonajes) {
  let aliveCharacters = arrayPersonajes.filter(character => character.status == "Alive");
  return (aliveCharacters);
};

function compare(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  else { return 0 }
}

export const alphabetic = function az(arrayPersonajes) {
  let alphabeticalOrder = arrayPersonajes.sort(compare);
  return (alphabeticalOrder);
}

/*
export const filtrar = (arrayPersonajes, toSearch) => {
  let texto = toSearch.toLowerCase();
  for (let personaje of arrayPersonajes) {
    let nombre = personaje.name.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      return (nombre)
    }
  }
};*/

export const buscarPorNombre = (data, busqueda) => data.filter(personaje => personaje.name.toLowerCase().includes(busqueda.toLowerCase()))
 


