import './card.css'
import Nested from './Nested'
export default function Display({ count }) {
  return (
    <>
      <div className="card-blue">
        Child 2
        <Nested count ={count} />
      </div>
    </>
  )
}
