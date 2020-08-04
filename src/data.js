// estas funciones son de ejemplo

export const name = () => {
  return 'name';
};

export const status = function alive (arrayPersonajes) {

  let aliveCharacters = arrayPersonajes.filter(character => character.status == "Alive");
  return (aliveCharacters);
};


export const worlds = function newWorlds(arrayPersonajes) {
  let world = [];
  for (let i = 0; i < arrayPersonajes.length; i++) {
    let nombreplaneta = `<div class= "personajesW" <img src="mundos.jpg"> <p> ${arrayPersonajes[i].origin.name} </p> </div>`
    if (!world.includes(nombreplaneta)) { world.push(nombreplaneta) }
  } 
};
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
 


