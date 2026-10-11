import { use } from 'react'
import { CounterContext } from '../providers/counterProvider'

export default function Nested() {
  const { count } = use(CounterContext);
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
