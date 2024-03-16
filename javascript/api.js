import {cards} from './etiquetas.js'
import {cartas} from './cards.js'

export const getApi = async()=>{
    let pokemons = [];
    for(let i=1;i<301;i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const api = await fetch(url);
        const resultados = await api.json();
        pokemons.push(resultados);
    }
    cartas(cards,pokemons);
}