import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  const incHandler = () => {
    setCount(count+1);
  }
const decHandler = () => {
    if(count<=0) return;
    else {
    setCount(count-1);
  }}

  return (
    <>
      <button onClick={incHandler}>Increment</button>
      {count}
      <button onClick={decHandler}>Decrement</button>
    </>
  )
}
