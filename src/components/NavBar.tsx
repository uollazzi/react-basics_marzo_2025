interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return (
    <div className="bg-blue-950 text-white p-4">
      LOGO - Prodotti a carrello: {cartItemsCount}
    </div>
  );
};

export default NavBar;
