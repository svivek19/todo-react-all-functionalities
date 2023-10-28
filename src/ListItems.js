import React from 'react'

export default function ListItems(props) {
    const { text, handleToggle, handleDel, completed } = props;
    return (
        <div>
            <h3 style={{color: completed? "green":"red"}}>{text}</h3>
            <button onClick={handleToggle}>{completed ? "undo" : "Finish"}</button>
            <button onClick={handleDel}>Delete</button>
        </div>
    )
}
