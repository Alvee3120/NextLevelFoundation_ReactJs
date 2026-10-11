import { use } from "react";
import { CounterContext } from "../providers/Counter.provider";

export default function GrandChild() {
  const { count } = use(CounterContext);
  return (
    <>
      <div className="container">
        <h1>GrandChild</h1>
        <div className="body">
          <h2>{count}</h2>
        </div>
      </div>
    </>
  );
}
