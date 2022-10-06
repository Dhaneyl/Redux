import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";

export const PokemonApi = () => {

  const dispatch = useDispatch();
  const {isLoading = false, pokemons = [], page} = useSelector(state => state.pokemon);

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>PokemonApi</h1>
      <hr />
      {isLoading && <span>Loading</span>}
      <ul>
        {
          pokemons.map(({name, url})=> (
            <li key={name}>
              {name} <br/>
              <code>{url}</code>
            </li>
          ))
        }
      </ul>

      <button
       disabled={isLoading}
       onClick={()=>dispatch( getPokemons(page))}
      >Next page</button>
    </>
  );
};
