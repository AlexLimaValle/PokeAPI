import type React from "react";
import type { Pokemon } from "../interfaces/pokemon.interface";
import { useEffect, useState } from "react";

interface Props{
    label:string,
    pokemonTodo:Pokemon[]
    pokemonVisibility:Pokemon[];
    setPokemonVisibility:React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

const Search:React.FC<Props> = ({label,pokemonTodo,pokemonVisibility,setPokemonVisibility})=>{

    const [buscador,setBuscador] = useState('');

    useEffect(()=>{

        if(buscador == ''){
            setPokemonVisibility(pokemonTodo);
            return;
        }

        if(buscador == undefined){
            console.log("hubo un error");
        }

        const pokemonFilter = pokemonVisibility.filter(e=>e.name.includes(buscador.toLowerCase()))
        setPokemonVisibility(pokemonFilter);
        
    },[buscador])

    return (
        <div>
            <label htmlFor="buscador" className="form-label">{label}</label>
            <input onChange={(e)=>setBuscador(e.target.value)}  className="form-control" type="text" id="buscador" name="buscador" value={buscador}/>
        </div>
    )
}

export default Search;