import Load from "./Loading";
import type { Pokemon } from "../interfaces/pokemon.interface";
import Card from "./Card";

interface PropsTemplate{
  pokemon: Pokemon[]
}

const Template: React.FC<PropsTemplate> = ({pokemon}) => {

  return <div className="row justify-content-evenly gy-4">
    {
        pokemon.length == 0 ? 
            <Load/>
        :pokemon.map((poke,key)=>{
          return <Card key={key} pokemon={poke}/>
        })

    }
  </div>;
};

export default Template;
