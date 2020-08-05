import { status ,  buscarPorNombre , alphabetic } from '../src/data.js';

const dataPrueba = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Death",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
    },
    {
        "id": 4,
        "name": "Beth Smith",
        "status": "Death",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
    } ]
    
    let pruebaRick = [{
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive",
          "species": "Human",
          "type": "",
          "gender": "Male",
          "origin": {
              "name": "Earth (C-137)",
              "url": "https://rickandmortyapi.com/api/location/1"
          },
          "location": {
              "name": "Earth (Replacement Dimension)",
              "url": "https://rickandmortyapi.com/api/location/20"
          },
      }]

      let pruebaAlive = [{
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Male",
        "origin": {
            "name": "Earth (C-137)",
            "url": "https://rickandmortyapi.com/api/location/1"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
    },{
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
  },
      ]

      let pruebaSort =[{
        "id": 4,
        "name": "Beth Smith",
        "status": "Death",
        "species": "Human",
        "type": "",
        "gender": "Female",
        "origin": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
        "location": {
            "name": "Earth (Replacement Dimension)",
            "url": "https://rickandmortyapi.com/api/location/20"
        },
    },
  {
      "id": 2,
      "name": "Morty Smith",
      "status": "Death",
      "species": "Human",
      "type": "",
      "gender": "Male",
      "origin": {
          "name": "Earth (C-137)",
          "url": "https://rickandmortyapi.com/api/location/1"
      },
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
  },
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Male",
    "origin": {
        "name": "Earth (C-137)",
        "url": "https://rickandmortyapi.com/api/location/1"
    },
    "location": {
        "name": "Earth (Replacement Dimension)",
        "url": "https://rickandmortyapi.com/api/location/20"
    },
},
  {
      "id": 3,
      "name": "Summer Smith",
      "status": "Alive",
      "species": "Human",
      "type": "",
      "gender": "Female",
      "origin": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
      "location": {
          "name": "Earth (Replacement Dimension)",
          "url": "https://rickandmortyapi.com/api/location/20"
      },
  }]


describe('This function allows to filtering chracters by name', () => {
  it('is a function', () => {
    expect(typeof buscarPorNombre).toBe('function');
  });

  it('returns Rick Sanchez', () => {
    expect(buscarPorNombre(dataPrueba,'rick')).toEqual(pruebaRick);
  });
});


describe('This function shows the characters that r alive', () => {
  it('is a function', () => {
    expect(typeof status).toBe('function');
  });
  it('returns Rick and Summer', () => {
    expect(status(dataPrueba)).toEqual(pruebaAlive);
  });
});


describe('this function compares the characters, then organize them in a alphabetical order', () => {
  it('is a function', () => {
    expect(typeof alphabetic).toBe('function');
  });

  it('returns in alphabetic order Beth Morty Rick Summer ', () => {
    expect(alphabetic(dataPrueba)).toEqual(pruebaSort);
  });
});


