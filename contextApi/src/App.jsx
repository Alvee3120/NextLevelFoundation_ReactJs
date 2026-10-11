import { useEffect } from "react";
import "./App.css";

import { useState } from "react";
// import Parent from "./components/Parent";
// import CounterProvider from "./providers/Counter.provider";

function App() {
  const [second, setSecond] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h1>{second}</h1>
    </>
  );
}

export default App;
