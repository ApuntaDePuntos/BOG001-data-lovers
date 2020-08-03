// estas funciones son de ejemplo

export const name = () => {
  return 'name';
};

export const alive = (arrayPersonajes) => {
  let alivePersonajesFiltros = arrayPersonajes.filter(personaje => personaje.status == "Alive");
};

export const status = () => {
  return 'status';
};

export const worlds = function newWorlds(arrayPersonajes) {
  let world = [];
  for (let i = 0; i < arrayPersonajes.length; i++) {
    let nombreplaneta = `<div class= "personajesW" <img src="mundos.jpg"> <p> ${arrayPersonajes[i].origin.name} </p> </div>`
    if (!world.includes(nombreplaneta)) { world.push(nombreplaneta) }
  }
};

export const filtrar = (arrayPersonajes) => {
  let texto = toSearch.toLowerCase();
  for (let personaje of arrayPersonajes) {
    let nombre = personaje.name.toLowerCase();
    if (nombre.indexOf(texto) !== -1) {
      return (nombre)
    }
  }
}


export const compare = function comparar(a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  else { return 0 } 
};
