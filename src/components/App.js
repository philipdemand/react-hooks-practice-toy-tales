import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/toys')
      .then(response => response.json())
      .then(data => {
        setToys(data);
      })
  }, []);

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  function handleAddToy(toyObj) {
    setToys([...toys, toyObj])
  }

  function handleDeleteToy(target) {
    const updatedItems = toys.filter((toy) => toy.id !== target);
  setToys(updatedItems);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy}/> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToy={handleDeleteToy}/>
    </>
  );
}

export default App;
