import type React from "react";
import '../style/nav.css';
import Search from "./Search";
import type { Pokemon } from "../interfaces/pokemon.interface";
import { useEffect, useState } from "react";

interface Items{
    name:string;
    color:string
}

interface Props{
    pokemonTodo:Pokemon[];
    pokemonVisibility:Pokemon[];
    setPokemonVisibility:React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

const Nav:React.FC<Props> = ({pokemonTodo,pokemonVisibility,setPokemonVisibility,})=>{

    const items:Items[] = [
        {
            name:"normal",
            color:"rgb(233, 11, 11)"
        },
        {
            name:"fire",
            color:"rgb(151, 235, 32)"
        },
        {
            name:"water",
            color:"rgba(32, 93, 235, 1)"
        },
        {
            name:"grass",
            color:"rgba(32, 188, 235, 1)"
        },
        {
            name:"water",
            color:"rgba(218, 32, 235, 1)"
        },
        {
            name:"electric",
            color:"rgba(235, 164, 32, 1)"
        },
        {
            name:"ice",
            color:"rgba(32, 235, 235, 1)"
        },
        {
            name:"fighting",
            color:"rgba(235, 32, 134, 1)"
        },
        {
            name:"poison",
            color:"rgba(81, 59, 208, 1)"
        },
        {
            name:"flying",
            color:"rgba(32, 147, 235, 1)"
        },
        {
            name:"psychic",
            color:"rgba(217, 79, 20, 1)"
        },
        {
            name:"bug",
            color:"rgba(235, 32, 56, 1)"
        },
        {
            name:"rock",
            color:"rgba(99, 142, 39, 1)"
        },
        {
            name:"ghost",
            color:"rgba(100, 32, 235, 1)"
        },
        {
            name:"dark",
            color:"rgba(0, 0, 0, 1)"
        },
        {
            name:"dragon",
            color:"rgba(235, 201, 32, 1)"
        },
        {
            name:"steel",
            color:"rgba(3, 10, 134, 1)"
        },
        {
            name:"fairy",
            color:"rgba(113, 188, 179, 1)"
        }
    ];

    const [button,setButton] = useState<string>('');

    useEffect(()=>{
        if(button == '') return;
        if(button == 'back'){
            setPokemonVisibility(pokemonTodo);
            return;
        }
        const buttonFilter = pokemonTodo.filter((pokemon)=>{
            const someTypesHas = pokemon.types.some(e=>e.type.name.includes(button.toLowerCase()));
            if(someTypesHas == true){
                return pokemon;
            }
        });
        setPokemonVisibility(buttonFilter);
    },[button])

    const handleClick = (event:React.MouseEvent<HTMLButtonElement>) => {
        setButton(event.currentTarget.textContent);
    };

    return (
        <nav className="row justify-content-between align-items-center py-2">
            <div className="col-xl-2">
                <img src="/assets/logo.png" alt="logo" style={{width:"160px",height:"90px"}} />
            </div>
            <div className="col-xl-2">
                <Search pokemonTodo={pokemonTodo} pokemonVisibility={pokemonVisibility} setPokemonVisibility={setPokemonVisibility} label="Buscar pokemon"/>
            </div>
            <div className="col-xl-7">
                {
                    items.map(({name,color},key)=>{
                        return <button key={key} onClick={handleClick} style={{backgroundColor:color}} className="boton__action">{name}</button>
                    })
                }
                <button className="ms-2 mb-1 btn btn-outline-info p-2" onClick={()=>setButton('back')}><img src="./assets/back.png" style={{width:"20px",height:"20px"}} alt="revert" /></button>
            </div>
        </nav>
    )
}

export default Nav;