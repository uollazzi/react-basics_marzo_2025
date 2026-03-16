import { useState } from "react";

const FormHook = () => {
  const [persona, setPersona] = useState({ nome: "", eta: 0 });

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");

    console.log(persona);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            id="nome"
            type="text"
            className="form-control"
            value={persona.nome}
            onChange={(event) =>
              setPersona({ ...persona, nome: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="eta" className="form-label">
            Età
          </label>
          <input
            value={persona.eta}
            onChange={(e) =>
              setPersona({
                ...persona,
                eta: parseInt(e.target.value),
              })
            }
            id="eta"
            type="text"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Salva
        </button>
      </form>
      <pre>{JSON.stringify(persona)}</pre>
    </>
  );
};

export default FormHook;
