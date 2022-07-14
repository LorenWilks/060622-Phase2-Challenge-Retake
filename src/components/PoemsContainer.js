import React from "react";
import Poem from "./Poem";

function PoemsContainer({displayedPoems}) {


  return (
    <div className="poems-container">{displayedPoems.map((poemObject) => {
      return <Poem key={poemObject.id} author={poemObject.author} name={poemObject.name} content={poemObject.content}/>
    })}</div>
  );
}

export default PoemsContainer;
