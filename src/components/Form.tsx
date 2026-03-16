import { useRef } from "react";

const Form = () => {
  const nomeRef = useRef<HTMLInputElement>(null);
  const etaRef = useRef<HTMLInputElement>(null);
  const persona = { nome: "", eta: 0 };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");

    if (nomeRef.current) {
      console.log(nomeRef.current.value);
      persona.nome = nomeRef.current.value;
    }

    if (etaRef.current) {
      console.log(etaRef.current.value);
      persona.eta = parseInt(etaRef.current.value);
    }

    console.log(persona);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nome" className="form-label">
          Nome
        </label>
        <input ref={nomeRef} id="nome" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="eta" className="form-label">
          Età
        </label>
        <input ref={etaRef} id="eta" type="text" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Salva
      </button>
    </form>
  );
};

export default Form;
