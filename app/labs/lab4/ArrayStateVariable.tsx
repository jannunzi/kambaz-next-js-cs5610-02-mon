"use client";

import { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addItem = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setArray([...array, randomNumber]);
  }
  const removeItem = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  }
  return (
    <div id="wd-array-state-variable">
      <h2>Array State Variable</h2>
      <ul>
        <li>
          <button onClick={addItem} >Add</button>
        </li>
        {array.map((item, index) => (
          <li key={item}>
            {item}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(array, null, 2)}</pre>

      <hr />
    </div >
  )
}