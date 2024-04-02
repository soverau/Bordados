import { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h3>{contador}</h3>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
