import { use } from "react";
import "../style.css";
import Child from "./Child";
import { CounterContext } from "../providers/Counter.provider";

export default function Parent() {
  const { count, setCount } = use(CounterContext);

  const incrementhandle = () => setCount(count + 1);

  const decrementhandle = () => {
    return setCount(count - 1);
  };
  return (  
    <>
      <div className="container">
        <h1>Parent</h1>

        <button onClick={decrementhandle} className="btn btn-dec">
          -
        </button>
        <h3>0</h3>
        <button onClick={incrementhandle} className="btn btn-inc">
          +
        </button>
        <div className="body">
          <Child />
        </div>
      </div>
    </>
  );
}
