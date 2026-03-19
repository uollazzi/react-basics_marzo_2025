import { useForm, type FieldValues } from "react-hook-form";

interface FormData {
  nome: string;
  eta: number;
}

const FormHook = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    // inviamo i valori al server
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label">
            Nome
          </label>
          <input
            {...register("nome", { required: true, minLength: 3 })}
            id="nome"
            type="text"
            className="form-control"
          />
          {errors.nome?.type == "required" && (
            <p className="text-danger">Nome obbligatorio</p>
          )}
          {errors.nome?.type == "minLength" && (
            <p className="text-danger">
              Il nome deve avere almenno 3 caratteri
            </p>
          )}
          {/* {errors.nome && <p className="text-danger">ERRORE nel nome</p>} */}
        </div>
        <div className="mb-3">
          <label htmlFor="eta" className="form-label">
            Età
          </label>
          <input
            {...register("eta", { required: true, valueAsNumber: true })}
            id="eta"
            type="number"
            className="form-control"
          />
          {errors.eta?.type == "required" && (
            <p className="text-danger">Età obbligatoria</p>
          )}
        </div>
        <button className="btn btn-primary" type="submit">
          Salva
        </button>
      </form>
    </>
  );
};

export default FormHook;
