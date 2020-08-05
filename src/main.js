import data from './data/rickandmorty/rickandmorty.js';
import { buscarPorNombre } from './data.js'

const datos = data.results;
let personajes = datos.slice(0, 99);

// PAGINA DE PERSONAJES
console.log(window.location.pathname)
if (window.location.pathname === "/src/Personajes.html" || window.location.pathname === "/Personajes") {

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

  function compare(a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    else { return 0 }
  }

  function az(arrayPersonajes) {
    let alphabeticalOrder = arrayPersonajes.sort(compare);
    show(alphabeticalOrder);
  }
  const sortButton = document.getElementById("sortButton")
  sortButton.addEventListener("click", (e) => az(personajes));

  // Busqueda de muñecos 
  const lupaBoton = document.getElementById("searchButton");
  const toSearch = document.getElementById('toSearch')
  let prueba = document.getElementById('resultadosP')

  lupaBoton.addEventListener("click", () => {
    let textoBusqueda = toSearch.value.toLowerCase();
    const resultadoBusqueda = buscarPorNombre(personajes, textoBusqueda)
    show(resultadoBusqueda)


  });
  //toSearch.addEventListener('keyup',filtrar);


  // esta } es cierre de if de la ventana
};

//PARA PAGINA MUNDOS 
if (window.location.pathname === "/src/Mundo.html" || window.location.pathname === "//Mundo") {

  // Para conseguir el nombre de los mundos 

  function newWorlds(worldArray) {
    let world = [];
    for (let i = 0; i < worldArray.length; i++) {
      // saber si en world ya existe ese nombre del planeta . poner en el HTML 
      let wordName = `<div class= "personajesW" <img src="mundos.jpg"> <p> ${worldArray[i].origin.name} </p> </div>`

      if (!world.includes(wordName)) { world.push(wordName) }
    };
    // Como filtrar personajes origen de cada mundo

    let worldButtons = document.getElementById("worldZone");
    worldButtons.innerHTML = world;
  }

  newWorlds(personajes)
  // esta } es cierre de if de la ventana
};

//PARA PAGINA DE TEMPORADAS

if (window.location.pathname === "/src/Temporada.html" || window.location.pathname === "/Temporada") {
  // Para conseguir los Capitulos 

  let results = [];
  const fetchEpisodes = () => {
    let url = `https://rickandmortyapi.com/api/episode/`;
    fetch(url)
      .then((reply) => {
        return reply.json();
      })
      .then((data) => {
        results = data.results
        newEpisodes(results);
      });
  };
  fetchEpisodes();

  function newEpisodes(arrayChapters) {

    let chapters = [];

    for (let i = 0; i < arrayChapters.length; i++) {
      let chaptersInfo = `<div class= "personajesS" > <div class="unoS"> <img class="imageS" src="images/season1.jpg"> </div> <div class="ChapterNameS"> <p> ${arrayChapters[i].name} </p> <p> ${arrayChapters[i].episode} </p> </div></div>`
      if (!chapters.includes(chaptersInfo)) { chapters.push(chaptersInfo) }
    }
    let seasonButtons = document.getElementById("seasonZone");
    seasonButtons.innerHTML = chapters;
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