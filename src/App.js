import React, { useState } from 'react'

const App = () => {

  const [name, setname] = useState();
  const [input, setinput] = useState([]);

  const handleAdd = (e) => {
    setname(e.target.value);
  }

  const handleInput = () => {

  }

  return (
    <div>
      <input type='text' placeholder='enter your task' value={name} onChange={handleInput} />
      <button onClick={handleAdd}>ADD</button>
    </div>
  )
}

export default App