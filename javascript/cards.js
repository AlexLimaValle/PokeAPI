import {tipos} from './tipoPokemon.js';

export const cartas = (etiqueta,json)=>{
    json.forEach(e=>{
        const ticket = document.createElement("div");
        ticket.setAttribute("class","card");
        ticket.innerHTML = `
                <h4 class="card__fondos">#${e.id.toString().padStart(3,"0")}</h4>
                <div class="card__fondo">
                    <img src="${e.sprites.other['official-artwork'].front_default}" alt="fondo" class="card__img">
                </div>
                <div class="card__title">
                    <div class="card__numbers">
                        <p class="card__number">#${e.id.toString().padStart(3,"0")}</p>
                    </div>
                    <div class="card__nombres">
                        <h3 class="card__nombre">${e.name.toUpperCase()}</h3>
                    </div>
                </div>
                <div class="card__tipos">
                    ${iteracion(e.types)}
                </div>
                <div class="card__datos">
                    <div class="card__cantidad">
                        <p class="card__cantidad-number">${e.height}M</p>
                    </div>
                    <div class="card__cantidad">
                        <p class="card__cantidad-number">${e.weight}KG</p>
                    </div>
                </div>
        `;

        
        etiqueta.appendChild(ticket);
    })
}


const iteracion = (datos)=>{
    let texto = "";
    for(let i=0;i<datos.length;i++){
        let tipos = datos[i].type.name;
        let color = obtenerColor(tipos);
        texto += `
             <p style="background-color:${color}" class="card__tipo-text">${tipos.toUpperCase()}</p>
        `
    }
    return texto;
}

const obtenerColor = (tipo)=>{
    const colores = tipos;
    let ponerColor = colores.find(e=>e.name == tipo);
    return ponerColor.color;
}
