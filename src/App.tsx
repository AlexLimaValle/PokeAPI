import React, { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Template from "./components/Template";
import type { Pokemon } from "./interfaces/pokemon.interface";
import type { PokemonItem } from "./interfaces/PokemonItem.interface";

const App: React.FC = () => {
  const apiPoke = `https://pokeapi.co/api/v2/pokemon?limit=200&offset=0`;

  const [todo, setTodo] = useState<Pokemon[]>([]);
  const [visibility,setVisibility] = useState<Pokemon[]>([]);

  useEffect(() => {
    const addApi = async () => {
      const fetchApi = await fetch(apiPoke);
      const { results } = await fetchApi.json();
      const promesas = results.map((p:PokemonItem)=>fetch(p.url).then(res=>res.json()));
      const pokemonData = await Promise.all(promesas);
      setTodo(pokemonData);
      setVisibility(pokemonData);
    };
    addApi();
  }, []);

  return (
    <div className="container-fluid">
        <Nav pokemonTodo={todo} pokemonVisibility={visibility} setPokemonVisibility={setVisibility} />
        <hr />
        <Template pokemon={visibility}/>
    </div>
  );
};

export default App;
