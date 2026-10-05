import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Testcomponents from './components/Testcomponents'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Testcomponents />
     <Card name = "Md Fazlah Karim Alvee"  age = {25} phone = {8801642874989} address="Uttara, Azompur, 1230" company="Shordindu"/>
    </>
  )
}

export default App
