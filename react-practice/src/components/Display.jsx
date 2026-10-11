import './card.css'
import Nested from './Nested'
export default function Display() {
  return (
    <>
      <div className="card-blue">
        Child 2
        <Nested  />
      </div>
    </>
  )
}
