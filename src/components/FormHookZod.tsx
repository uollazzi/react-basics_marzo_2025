import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  nome: z.string().min(3, { error: "Il nome deve essere almeno lungo 3" }),
  eta: z.number().min(18, { error: "Devi essere maggiorenne" }),
});

type FormData = z.infer<typeof schema>; // crea un tipo di typescript (FormData) a partire dallo schema

const FormHookZod = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema), mode: "onChange" });

  // console.log(errors);

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
            {...register("nome")}
            id="nome"
            type="text"
            className="form-control"
          />
          {errors.nome && <p className="text-danger">{errors.nome.message}</p>}
        </div>
        <div className="mb-3">
          <label htmlFor="eta" className="form-label">
            Età
          </label>
          <input
            {...register("eta", { valueAsNumber: true })}
            id="eta"
            type="number"
            className="form-control"
          />
          {errors.eta && <p className="text-danger">{errors.eta.message}</p>}
        </div>
        <button className="btn btn-primary" type="submit" disabled={!isValid}>
          Salva
        </button>
      </form>
    </>
  );
};

export default FormHookZod;
