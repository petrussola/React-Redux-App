import * as types from "./actionTypes";
import axios from "axios";

const starWarsApi = "https://swapi.co/api/people/";

// RELATED TO SLICE OF STATE LIST OF PEOPLE

export function getPeople(listPeopleApi) {
  return {
    type: types.ADD_PEOPLE_LIST,
    payload: listPeopleApi
  };
}

export const fetchPeople = () => dispatch => {
  axios
    .get(starWarsApi)
    .then(res => {
      dispatch(getPeople(res.data.results));
    })
    .catch(error => {
      console.log("api error!");
    });
};

// RELATED TO SLICE OF STATE PERSON SELECTED

export function selectPerson(name) {
    return {
        type: types.SELECT_PERSON,
        payload: name
      };
}
