import { useState } from 'react'
import Card from './components/Card'


function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState()
  const [address, setAddress] = useState('')
  const [users, setUser] = useState([{name: "Alvee" , age: 32, address:"Noakhali"}])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({name, age, address});
    setUser([...users,{name, age, address}])
    setName("");
    setAge('');
    setAddress("");
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
        required
          type="text"
          placeholder='Name...'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          required
          placeholder='Age...'
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          required
          placeholder='Address...'
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input type="submit" />
      </form>
      {users.map((u) => (
        <Card name={u.name} age={u.age} address={u.address} />
      ))}
    </>
  )
}

export default App
