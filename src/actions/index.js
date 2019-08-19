import { FETCH_HOUSE, FETCH_HOUSES, FETCH_PERSON } from "../constants";

const GoT_api = `https://www.anapioficeandfire.com/api`;

export const fetchHouses = () => ({
  type: FETCH_HOUSES,
  callAPI: `${GoT_api}/houses?page=1&pageSize=10`
});

export const fetchHouse = id => ({
  type: FETCH_HOUSE,
  callAPI: `${GoT_api}/houses/${id}`
});

export const fetchPerson = id => ({
  type: FETCH_PERSON,
  callAPI: `${GoT_api}/characters/${id}`
});
