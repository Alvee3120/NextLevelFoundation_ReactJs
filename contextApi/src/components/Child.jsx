import GrandChild from "./Grandchild";

export default function Child() {
  return (
    <>
      <div className="container">
        <h1>Child</h1>
        <div className="body">
          <GrandChild />
        </div>
      </div>
    </>
  );
}
