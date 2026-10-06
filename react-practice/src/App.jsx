import { useState } from 'react'
import Counter from './components/Counter'
import Display from './components/Display'
 
export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
    <h3>Parent</h3>
      <Counter count={count} setCount={setCount} />
      <Display count={count} />
    </>
  )
}
