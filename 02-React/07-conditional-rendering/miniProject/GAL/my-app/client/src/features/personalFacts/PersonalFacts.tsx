import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FactProps } from "./factModel";
import { OptionCard } from "./OptionCard";

interface FactsCompProps {
  facts: Array<FactProps>;
}

export const PersonalFacts = ({ facts }: FactsCompProps) => {
  const [guessWho, setGuessWho] = useState<string>('');
  const [backgroundColor, setBackgroundColor] = useState<string>('red');
  console.log(facts);
  function handleSelect(ev:any){
   let id= ev.target.id
   console.log(ev.target.id)
   if(id=== `true`){
    setBackgroundColor('red');
    setGuessWho(`You are wrong`)
   }else if(id=== `false`){
    setBackgroundColor('green');
    setGuessWho("You are right")
  }
   }

  const { id } = useParams();
  console.log(id);

  const fact = facts.find((fct) => fct.id === id);
  const options = fact?.options

  if (fact) {
    return (
      <div>
        <Link to="/FactList">Back</Link>

        <div>
        <h1> {fact ? fact.text : null} </h1>
        <h2> choose the wrong fact</h2>
        <h3>{guessWho}</h3>
        </div>

        <button onClick={handleSelect} style={{background: backgroundColor}}> 
        {options?.map((text, id) => <OptionCard option={text} key={id}/>)}
          </button> 

      </div>
    );
  } else {
    return (
      <h1>
        Missing fact - <Link to="/FactList"> go back</Link>
      </h1>
    );
  }
};
