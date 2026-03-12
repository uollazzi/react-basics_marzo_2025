// let count = 0;

function Messaggio() {
  console.log("Messaggio renderizzato");
  // count++;
  const nome = "";

  if (nome) {
    return <h1>Ciao {nome}</h1>;
  }

  return <h1>Ciao mondo!</h1>;
}

export default Messaggio;
