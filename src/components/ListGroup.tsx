import { useState } from "react";

interface Props {
  items: string[];
  title: string;
  showIndex: boolean;
  onItemSelected: (item: string) => void;
}

const ListGroup = ({ items, title, showIndex, onItemSelected }: Props) => {
  // const items = ["Mele", "Burro", "Uova", "Pistacchi", "Prugne"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // items = [];

  // if (items.length == 0) {
  //   return <p>Lista vuota</p>;
  // }

  // const handleClick = (event: MouseEvent) => {
  //   console.log(event.target);
  // };

  // const somma = (n1: number, n2: number): number => {
  //   return n1 + n2;
  // };

  return (
    <>
      <h1 className="text-4xl pb-2 text-red-700">{title}</h1>

      {items.length == 0 && <p>Lista vuota</p>}

      <ul className="divide-y divide-gray-200 rounded-lg border border-gray-400 overflow-hidden bg-gray-900 text-white">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index ? "px-4 py-3 bg-amber-400" : "px-4 py-3"
            }
            key={index}
            onClick={() => {
              // handleClick(event);
              setSelectedIndex(index);
              onItemSelected(item);
            }}
          >
            {showIndex && <span>{index} - </span>}
            <strong>{item}</strong>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
