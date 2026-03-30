import { useEffect, useState } from "react";
import axios, { AxiosError, CanceledError } from "axios";
import type { User } from "../models/user";

const UsersAjax = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        // se l'errore è di tipo CanceledError (cioè è scattato per colpa dell'AbortController)
        // non facciamo niente
        if (err instanceof CanceledError) return;

        // se invece l'errore è un errore HTTP (400, 500)
        // loggiamo l'errore attraverso setError
        setError((err as AxiosError).message);
      });

    return () => controller.abort();
  }, []);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       const res = await axios.get<User[]>(
  //         "https://jsonplaceholder.typicode.com/users",
  //       );
  //       setUsers(res.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };
  //   getUsers();
  // }, []);

  const deleteUser = (user: User) => {
    const originalUser = [...users];
    // optimistic update
    // rimuovo prima dall'html e poi dal server (sperando che la cancellazione sul server vada a buon fine)
    setUsers(users.filter((u) => u.id != user.id));

    // DELETE https://jsonplaceholder.typicode.com/users/3
    axios
      .delete(`https://jsonplaceholder.typicode.com/userssss/${user.id}`)
      .then((res) => console.log(res.data))
      .catch((err: AxiosError) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };

  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      {isLoading && <div className="spinner-border text-secondary"></div>}
      <ul className="list-group">
        {users.map((u) => (
          <li
            key={u.id}
            className="list-group-item d-flex justify-content-between"
          >
            {u.name}
            <button
              className="btn btn-outline-danger btn-sm"
              onClick={() => deleteUser(u)}
            >
              Elimina
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersAjax;
