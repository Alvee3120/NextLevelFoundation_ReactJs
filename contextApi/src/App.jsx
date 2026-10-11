import "./App.css";
import Parent from "./components/Parent";
import CounterProvider from "./providers/Counter.provider";

function App() {
  return (
    <CounterProvider>
      <Parent />
    </CounterProvider>
  );
}

export default App;
