import { FETCH_HOUSE, FETCH_HOUSES, FETCH_PERSON } from "../constants";

export const fetchHouses = () => ({
  type: FETCH_HOUSES,
  callAPI: `https://www.anapioficeandfire.com/api/houses?page=1&pageSize=10`
});

export const fetchHouse = id => ({
  type: FETCH_HOUSE,
  callAPI: `https://www.anapioficeandfire.com/api/houses/${id}`
});

export const fetchPerson = id => ({
  type: FETCH_PERSON,
  callAPI: `https://www.anapioficeandfire.com/api/characters/${id}`
});
