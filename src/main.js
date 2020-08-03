//import { example } from './data.js';	
//console.log( example );

import data from './data/rickandmorty/rickandmorty.js';
const datos = data.results;

let personajes = datos.slice(0, 99);

// PAGINA DE PERSONAJES
console.log(window.location.pathname)
if (window.location.pathname === "/src/Personajes.html") {

  function popUp(e, arrayPersonajes) {
    const indicator = e.target.dataset.personajes;

    let information = [];
    let characterCards = document.getElementById("pruebaTarjeta");


    information += ` <div class= "tarjeta"> 
      <img class="tarjetaImg" src="${arrayPersonajes[indicator].image} "> 
      <div class="tarjetaText"> <p> Name: ${arrayPersonajes[indicator].name}
      </p> <p> Gender: ${arrayPersonajes[indicator].gender} </p> <p> Species: ${arrayPersonajes[indicator].species} </p>
      <p> Origin: ${arrayPersonajes[indicator].origin.name} </p> <p> Status: ${arrayPersonajes[indicator].status} </p> </div> 
      <div id="cerrarModal" class="modal_cerrar" > x <div>
      
        </div>`

    characterCards.innerHTML = information;
    document.getElementById("pruebaTarjeta").style.visibility = "visible";
    document.getElementById("cerrarModal").addEventListener("click", function () {
      document.getElementById("pruebaTarjeta").style.visibility = "hidden";
    })

  };

  function show(arrayPersonajes) {
    let names = [];
    for (let i = 0; i < arrayPersonajes.length; i++) {
      names += `<div class= "personajes1" data-personajes="${i}" id="${arrayPersonajes[i].id}-${i}">
        <img class= "image" data-personajes="${i}" src="${arrayPersonajes[i].image} ">
      <p data-personajes="${i}" class= "nombres" >${arrayPersonajes[i].name.slice(0, 17)} </p>  </div>`
    };

    const characterButtons = document.getElementById("charactersZone");

    characterButtons.innerHTML = names;

    for (let i = 0; i < arrayPersonajes.length; i++) {
      const boton = document.getElementById(`${arrayPersonajes[i].id}-${i}`);
      boton.addEventListener("click", (e) => popUp(e, personajes));
    };

    //Cierre funcion show
  };
  show(personajes)

  // Filtro para los personajes vivos

  function alive(arrayPersonajes) {

    let alivePersonajesFiltros = arrayPersonajes.filter(personaje => personaje.status == "Alive");
    show(alivePersonajesFiltros);
  }
  const aliveButton = document.getElementById("alive")
  aliveButton.addEventListener("click", (e) => alive(personajes));

  // Metodo SORT();

  function comparar(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    else { return 0 }
  }

  function az(arrayPersonajes) {
    let alphabeticalOrder = arrayPersonajes.sort(comparar);
    show(alphabeticalOrder);
  }
  const sortButton = document.getElementById("sortButton")
  sortButton.addEventListener("click", (e) => az(personajes));

  // Busqueda de muñecos 
  const lupaBoton = document.getElementById("searchButton");
  const toSearch = document.getElementById('toSearch')
  let prueba = document.getElementById('resultadosP')

  const filtrar = () => {
    //prueba.innerHTML = ''
    let texto = toSearch.value.toLowerCase();
    for (let personaje of personajes) {
      let nombre = personaje.name.toLowerCase();
      if (nombre.indexOf(texto) !== -1) {
        console.log(nombre)
        prueba.innerHTML += nombre
      }
    } if (prueba.innerHTML === '') { prueba.innerHTML += 'Personaje no existe...' }
  }

  lupaBoton.addEventListener("click", filtrar);
  //toSearch.addEventListener('keyup',filtrar);


  // esta } es cierre de if de la ventana
};

//PARA PAGINA MUNDOS 

if (window.location.pathname === "/src/Mundo.html") {

  // Para conseguir el nombre de los mundos 

  function newWorlds(arrayPersonajes) {
    let world = [];
    for (let i = 0; i < arrayPersonajes.length; i++) {
      // saber si en world ya existe ese nombre del planeta . poner en el HTML 
      let nombreplaneta = `<div class= "personajesW" <img src="mundos.jpg"> <p> ${arrayPersonajes[i].origin.name} </p> </div>`

      if (!world.includes(nombreplaneta)) { world.push(nombreplaneta) }
    };
    // Como filtrar personajes origen de cada mundo

    let worldButtons = document.getElementById("worldZone");
    worldButtons.innerHTML = world;
  }

  newWorlds(personajes)
  // esta } es cierre de if de la ventana
};

//PARA PAGINA DE TEMPORADAS

if (window.location.pathname === "/src/Temporada.html") {

  // Para conseguir los Capitulos 
  /*
    let chapters = [];
  
    for (let i = 0; i < personajes.length; i++) {
      // saber si en world ya existe ese nombre del capitulos 
      let nombrecapitulos = `<div class= "personajesS" > <div class="unoS"> <img class="imageS" src="season1.jpg"> </div> <div class="ChapterNameS"><p> Episode: ${personajes[i].episode[1]}</p></div></div>`
  
      if (!chapters.includes(nombrecapitulos)) { chapters.push(nombrecapitulos) }
  
    };
    let seasonButtons = document.getElementById("seasonZone");
    seasonButtons.innerHTML = chapters; */

  // Otra forma de conseguir episodios 

  let results = [];
  const fetchEpisodes = () => {
    let url = `https://rickandmortyapi.com/api/episode/`;
    fetch(url)
      .then((reply) => {
        return reply.json();
      })
      .then((data) => {
        results['results'] = data.results
      })
    fetchEpisodes();
    
    console.log("hola mundo")
    let episodioInfo = [];
    for (let i = 0; i < results.length; i++) {
      episodioInfo += ` <p class= "nombres" >${results[i].name} </p>`
    }
    let seasonButtons = document.getElementById("seasonZone");
    seasonButtons.innerHTML = results;

  };



  // esta } es cierre de if de la ventana
};


// Botones paginas 

function turnPageC() {
  window.location.href = 'Personajes.html';
}
function turnPageW() {
  window.location.href = 'Mundo.html';
}
function turnPageS() {
  window.location.href = 'Temporada.html';
}

document.querySelector('#toCharacters').addEventListener('click', turnPageC)
document.querySelector('#toWorlds').addEventListener('click', turnPageW)
document.querySelector('#toSeasons').addEventListener('click', turnPageS)