import { useState } from "react";

interface Cliente {
  nome: string;
  indirizzo: Indirizzo;
}

interface Indirizzo {
  citta: string;
  CAP: string;
}

interface Ticket {
  id: number;
  testo: string;
  risolto: boolean;
}

export const UpdateLogic = () => {
  const [prodotto, setProdotto] = useState({
    nome: "Ciabatte",
    prezzo: 5,
  });

  const [cliente, setCliente] = useState<Cliente>({
    nome: "Mario",
    indirizzo: {
      citta: "Modena",
      CAP: "41100",
    },
  });

  const [frutti, setFrutti] = useState<string[]>(["mela", "pera"]);

  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: 1,
      testo: "Ticket 1",
      risolto: false,
    },
    {
      id: 2,
      testo: "Ticket 2",
      risolto: false,
    },
  ]);

  const aggiornaDati = () => {
    // const nuovoProdotto = {
    //   ...prodotto,
    //   prezzo: 7,
    // };

    setProdotto({ ...prodotto, prezzo: 7 });
    setCliente({
      ...cliente,
      indirizzo: { ...cliente.indirizzo, CAP: "12345", citta: "Roma" },
    });

    // array
    // ADD
    setFrutti([...frutti, "kiwi"]); // ["mela", "pera", "kiwi"]

    // REMOVE mela
    setFrutti(frutti.filter((f) => f != "mela"));

    // UDPATE pera => arancia
    setFrutti(frutti.map((f) => (f == "pera" ? "arancia" : f)));

    // UPDATE array di oggetti
    setTickets(tickets.map((t) => (t.id == 2 ? { ...t, risolto: true } : t)));
  };

  return (
    <div>
      <p>{prodotto.prezzo}</p>
      <p>
        {cliente.indirizzo.CAP} - {cliente.indirizzo.citta}
      </p>
      <ol className="list-decimal">
        {frutti.map((f) => (
          <li className="ml-8" key={f}>
            {f}
          </li>
        ))}
      </ol>
      <hr className="my-4" />
      <ul className="list-item bg-pink-300 px-4 rounded-2xl divide-y divide-pink-950">
        {tickets.map((t) => (
          <li key={t.id} className="p-4">
            <b>{t.id}</b> - {t.testo} - Risolto: {t.risolto ? "Sì" : "No"}
          </li>
        ))}
      </ul>
      <button onClick={aggiornaDati}>Cliccami</button>
    </div>
  );
};
