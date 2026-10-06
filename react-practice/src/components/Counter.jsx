import './card.css'
export default function Counter({count, setCount}) {
  const incHandler = () => {
    setCount(count + 1)
  }
  const decHandler = () => {
    if (count <= 0) return
    else {
      setCount(count - 1)
    }
  }

  return (
    <>
    
      <div className="card">
        Child 1
        <button className="btn btn-inc" onClick={incHandler}>
          Increment
        </button>
        <button className="btn btn-dec" onClick={decHandler}>
          Decrement
        </button>
      </div>
    </>
  )
}
