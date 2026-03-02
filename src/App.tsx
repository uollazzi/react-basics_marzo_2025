import ListGroup from "./components/ListGroup";
import Messaggio from "./components/Messaggio";

function App() {
  return (
    <div className="max-w-4xl mx-auto">
      <Messaggio />
      <hr className="my-2" />
      <ListGroup />
    </div>
  );
}

export default App;
