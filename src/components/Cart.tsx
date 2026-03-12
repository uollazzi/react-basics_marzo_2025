import Button from "./Button";

interface Props {
  cartItems: string[];
  onClear: () => void;
  onRemove: (cartItem: string) => void;
}

const Cart = ({ cartItems, onClear, onRemove }: Props) => {
  return (
    <>
      <h1 className="font-bold text-4xl text-amber-600">Carrello</h1>
      <ul>
        {cartItems.map((p) => (
          <li key={p}>
            {p} <button onClick={() => onRemove(p)}>Rimuovimi</button>
          </li>
        ))}
      </ul>
      <Button onClick={onClear} color="danger">
        Svuota carrello
      </Button>
    </>
  );
};

export default Cart;
