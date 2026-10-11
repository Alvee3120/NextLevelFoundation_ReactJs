import { useState, createContext } from "react";

export const CounterContext = createContext();

export default function CounterProvider({ children }) {
  const [count, setCount] = useState(1);
  return (
    <CounterContext.Provider value={{ count, setCount }}>
      {children}
    </CounterContext.Provider>
  );
}
