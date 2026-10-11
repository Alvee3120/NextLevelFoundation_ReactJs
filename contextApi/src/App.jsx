import { useEffect } from "react";
import "./App.css";

import { useState } from "react";
import Card from "./components/Card";
// import Parent from "./components/Parent";
// import CounterProvider from "./providers/Counter.provider";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
  //     res
  //       .json()
  //       .then((data) => setData(data))
  //       .finally(() => setIsLoading(false)),
  //   );
  // }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) {
          throw new Error(res.message || "something went wrong");
        }

        const data = await res.json();
        setData(data);
      } catch (err) {
        setErr(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <h2>loading...</h2>;
  }
  return (
    <>
      {data.map((user) => (
        <Card user={user} />
      ))}
    </>
  );
}

// function App() {
//   const [second, setSecond] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSecond((prev) => prev + 1);
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <>
//       <h1>{second}</h1>
//     </>
//   );
// }

// export default App;
