import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemon, startLoadingPokemon } from "./pokemonSlice";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemon());

    //&For doing: Make https petitions
    // * Petitions with fetch
    // const resp = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(page * 10)} `
    // );
    // const data = await resp.json();
    // console.log(data);
    // * Petitions with axios.
    //Remember that pokemonApi has the endpoint of this api called baseURL
    const {data} = await pokemonApi.get(`pokemon?limit=10&offset=${page * 10}`);
    // console.log(resp); this line of code above bf used to be called resp

    dispatch(setPokemon({ pokemons: data.results, page: page + 1 }));
  };
};
