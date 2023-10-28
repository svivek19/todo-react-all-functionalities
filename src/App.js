import React, { useState } from 'react'
import ListItems from './ListItems';

const App = () => {

  const [name, setname] = useState();
  const [input, setinput] = useState([]);

  const handleInput = (e) => {
    setname(e.target.value)
  }
  const handleAdd = () => {
    setinput([...input, { text: name, completed: false }])
    setname("")
  }

  const handleToggle = (index) => {
    const updatedVal = [...input];
    updatedVal[index].completed = !updatedVal[index].completed
    setinput(updatedVal)
  }

  const handleDel = (index) => {
    const updatedVal = [...input];
    updatedVal.splice(index, 1)
    setinput(updatedVal)
  }

  return (
    <div>
      <input type='text' placeholder='enter your task' value={name} onChange={handleInput} />
      <button onClick={handleAdd}>ADD</button>
      {input.map((items, index) => (
        <ListItems
          key={items}
          text={items.text}
          completed={items.completed}
          handleToggle={() => handleToggle(index)}
          handleDel={() => handleDel(index)}
        />
      ))}
    </div>
  )
}

export default App