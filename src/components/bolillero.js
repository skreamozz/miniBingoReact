import React, { useState } from "react";

/**
 *
 * @param {Number} numeroMax
 *
 */
const Bolillero = ({ numeroMax }) => {
  const [numero, setNumero] = useState(0);
  const [numerosSalidos, setNumerosSalidos] = useState([]);

  /**
   * funcion recursiva que se encarga de calular los numeros y verificar
   * que no se repitan ni se salgan del rango comprendido
   */
  const calcularRandom = () => {
    if (numeroMax === 0) {
      setNumerosSalidos([]);
      return 0;
    }
    if (numerosSalidos.length === numeroMax) return 0;
    let numero = Math.floor(Math.random() * numeroMax + 1);
    const filtro = numerosSalidos.filter((x) => x === numero);

    if (filtro.length > 0) {
      return calcularRandom();
    }

    setNumerosSalidos([...numerosSalidos, numero]);
    return numero;
  };
  const handleClick = () => {
    setNumero(calcularRandom());
  };

  return (
    <div
      className="bolillero m-auto user-select-none rounded-circle text-center display-4 bg-white text-dark p-5"
      onClick={handleClick}
    >
      {numero.toString().padStart(2, "00")}
    </div>
  );
};

export default Bolillero;
