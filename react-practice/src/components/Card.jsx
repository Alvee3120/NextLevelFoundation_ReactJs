import './card.css'

export default function Card({ children, name, age, address, phone, company }) {
  if (age < 18) return <div className="card"> Not a Voter </div>
  
    if (age > 18 ) return (
    <>
      <div className="card">
        <p>{children}</p>
        <p>Name: {name} </p>
        <p>Age: {age} </p>
        <p>Address: {address} </p>
        <p>Phone: {phone} </p>
        <p>Company: {company} </p>
      </div>
    </>
  )
}
