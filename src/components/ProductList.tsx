import { useEffect, useState } from "react";

interface Props {
  category: string;
}

const ProductList = ({ category }: Props) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Recupero prodotti in corso da", category);
    setProducts(["Mele", "Pere"]);
  }, [category]);

  return <div>ProductList</div>;
};

export default ProductList;
