import { useState } from 'react';
import './card.css'

export default function Card({ name, age, address}) {
  
    const [click,setClick] = useState("");

    const clickhandle = (name) => {
    setClick(name);
  }

  if (age < 18) return <div className="card"> Not a Voter </div>

  if (age > 18)
    return (
      <>
        <div className="card" onClick={() => clickhandle(name)}>
          <p>Name: {name} </p>
          <p>Age: {age} </p>
          <p>Address: {address} </p>
          
          {click}
        </div>
      </>
    )
}
