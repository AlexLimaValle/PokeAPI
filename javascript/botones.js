import {cards} from './etiquetas.js';
import {cartas} from './cards.js'
import { getApi } from './api.js';
export const botonesTipo = document.querySelectorAll(".nav__button");

const filtrarApi = async(filtro)=>{
    let pokemons = [];
    for(let i=1;i<301;i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        const api = await fetch(url);
        const resultados = await api.json();
        pokemons.push(resultados);
    }
    const resultadosFiltrados = pokemons.filter(pokemon => {
        return pokemon.types.some(type => type.type.name === filtro);
    });
    console.log(resultadosFiltrados);
    cartas(cards,resultadosFiltrados);
}

botonesTipo.forEach(e=>{
    e.addEventListener('click',function(e){
        cards.innerHTML = '';
        if(e.target.textContent == 'VER TODO'){
            getApi();
        }
        filtrarApi(e.target.textContent.toLowerCase());
    })

});