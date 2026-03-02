function Messaggio() {
  const nome = "";

  if (nome) {
    return <h1>Ciao {nome}</h1>;
  }

  return <h1>Ciao mondo!</h1>;
}

export default Messaggio;
