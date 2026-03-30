import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import UsersAjax from "./components/UsersAjax";

const App4 = () => {
  const [category, setCategory] = useState("");
  // afterRender
  useEffect(() => console.log("side effect"));

  return (
    <div className="container">
      <select
        className="form-select"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=""></option>
        <option value="abbigliamento">Abbigliamento</option>
        <option value="svago">Svago</option>
      </select>
      <ProductList category={category} />
      <hr />
      <UsersAjax />
    </div>
  );
};

export default App4;
