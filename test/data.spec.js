import { status ,  buscarPorNombre , compare } from '../src/data.js';

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
    },
    {
        "id": 4,
        "name": "Beth Smith",
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
    } ]
    
    let pruebaRick = "[{\"gender\": \"Male\", \"id\": 1, \"location\": {\"name\": \"Earth (Replacement Dimension)\", \"url\": \"https://rickandmortyapi.com/api/location/20\"}, \"name\": \"Rick Sanchez\", \"origin\": {\"name\": \"Earth (C-137)\", \"url\": \"https://rickandmortyapi.com/api/location/1\"}, \"species\": \"Human\", \"status\": \"Alive\", \"type\": \"\"}]"

    //Nombres Beth Smith, Rick Sanchez
describe('This function allows to filtering chracters by name', () => {
  it.only('is a function', () => {
    expect(typeof buscarPorNombre).toBe('function');
  });

  it.only('returns Rick Sanchez', () => {
    expect(buscarPorNombre(dataPrueba,'rick')).toBe(pruebaRick);
  });
});


describe('This function shows the characters that r alive', () => {
  it('is a function', () => {
    expect(typeof status).toBe('function');
  });
    const characterStatus = [
      {
          "id": 1,
          "name": "Rick Sanchez",
          "status": "Alive"
        }, {
          "id": 2,
          "name": "Summer Smith",
          "status": "Death"}]

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


describe('this function compares which element is bigger', () => {
  it ('is a function', () => {
    expect(typeof compare).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});