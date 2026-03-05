import { useState } from "react";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Messaggio from "./components/Messaggio";

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
    </div>
  );
}

export default App;
