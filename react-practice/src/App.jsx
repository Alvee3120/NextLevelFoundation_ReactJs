import Card from './components/Card'

function App() {
  return (
    <>
      <Card
        name="Md Fazlah Karim Alvee"
        age={25}
        phone={8801642874989}
        address="Uttara, Azompur, 1230"
        company="Shordindu"
      >
        {' '}
        <h3> Voter Id Card Info </h3>
      </Card>
      <Card
        name="Md Fazlah Rabbi Ovi"
        age={29}
        phone={8801860793870}
        address="Sonapur , Noakhali, 3804"
        company="Ovi EnterPrise"
      >
        {' '}
        <h3> Voter Id Card Info </h3>
      </Card>
    </>
  )
}

export default App
