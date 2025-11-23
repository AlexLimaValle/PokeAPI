import { useState } from "react";
import type { Pokemon } from "../interfaces/pokemon.interface";

interface cardProps{
    pokemon: Pokemon
}

const Card:React.FC<cardProps> = ({pokemon})=>{

    const [loadImg, setImgLoad] = useState(true);

    return (
    <div className="card col-xl-3 shadow-sm " style={{width: "18rem"}}>

            {
                loadImg && (
                    <img src="/assets/loading.gif" style={{width:"70px",height:"70px"}} alt="..." />
                )
            }
            <img onLoad={()=>setImgLoad(false)} src={pokemon.sprites.other?.["official-artwork"].front_default} className="card-img-top" alt="..."/>
            <div className="card-body">
                <div className="row justify-content-evenly align-items-center">
                    <div className="col-4 col-xl-3 rounded-3 border border-2 disabled">
                        <p className="text-center my-2">#{pokemon.id}</p>
                    </div>
                    <div className="col-6 col-xl-7">
                        <h5 className="card-title text-capitalize">{pokemon.name}</h5>  
                    </div>
                </div>
                <div className="row justify-content-center justify-content-xl-center mt-4">
                    {
                        pokemon.types.map((e,key)=>{
                            return (
                                <div key={key} className="col-4 col-xl-4">
                                    <button className="btn btn-dark text-white text-uppercase">{e.type.name}</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Card;