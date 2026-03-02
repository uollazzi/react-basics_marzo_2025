const ListGroup = () => {
  const items = ["Mele", "Burro", "Uova", "Pistacchi", "Prugne"];

  return (
    <>
      <h1>Lista della spesa</h1>
      <ul className="divide-y divide-gray-200 rounded-lg border border-gray-400">
        {items.map((item) => (
          <li className="px-4 py-3" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
