import React, {useState, useEffect} from "react";
import PoemsContainer from "./PoemsContainer";
import NewPoemForm from "./NewPoemForm";

function App() {

  const [poems, setPoems] = useState([])

  useEffect(() =>{
    fetch('http://localhost:8004/poems')
    .then((response) => response.json())
    .then((poems) => setPoems(poems)
  }), [])

  // const displayedPoems = poems.filter((poem) => {
  //   return setPoems(poem);
  // });

  return (
    <div className="app">
      <div className="sidebar">
        <button>Show/hide new poem form</button>
        {true ? <NewPoemForm /> : null}
      </div>
      <PoemsContainer displayedPoems={poems}/>
    </div>
  );
}

export default App;
