export default function Nested({ count }) {
  return (
    <>
      <div className="card-nested">
        This is Grand Child
        <br />
        <h1>{count}</h1>
      </div>
    </>
  )
}
