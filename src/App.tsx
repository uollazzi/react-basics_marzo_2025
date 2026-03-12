import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Messaggio from "./components/Messaggio";
import Button from "./components/Button";
import { FaRegPlusSquare } from "react-icons/fa";
import Like from "./components/Like";
import { UpdateLogic } from "./components/UpdateLogic";

function App() {
  const listaDellaSpesa = ["Mele", "Burro", "Uova", "Pistacchi", "Prugne"];
  const invitati = ["Gigi", "Laura", "Anna", "Irina", "Giulia"];
  const [alertVisible, setAlertVisible] = useState(true);

  const handleSelectItem = (item: string): void => {
    console.log("Elemento selezionato:", item);
  };

  const handleAlertOnClose = () => {
    setAlertVisible(false);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Messaggio />
      <hr className="my-4" />
      <ListGroup
        items={listaDellaSpesa}
        title="Lista della spesa"
        showIndex={true}
        onItemSelected={handleSelectItem}
      />
      <hr className="my-4" />
      <ListGroup
        items={invitati}
        title="Inviatati"
        showIndex={false}
        onItemSelected={handleSelectItem}
      />
      <hr className="my-4" />
      {!alertVisible && (
        <button
          className="p-2 bg-green-600 cursor-pointer"
          onClick={() => setAlertVisible(true)}
        >
          Apri alert!
        </button>
      )}
      {alertVisible && (
        <Alert onClose={handleAlertOnClose}>
          <h1>Errore</h1>
          <p>Connessione al server fallita</p>
        </Alert>
      )}
      <hr className="my-4" />
      <Button color="danger" onClick={() => alert("Ciao!")}>
        <b>Ciao</b>
      </Button>
      <Button color="warning" onClick={() => alert("Ciao!")}>
        <FaRegPlusSquare size={48} />
        <b>Ciao</b>
      </Button>
      <hr className="my-4" />
      <Like onStatusChange={(l) => console.log(l ? "Like" : "Dislike")} />
      <hr className="my-4" />
      <UpdateLogic />
    </div>
  );
}

export default App;
