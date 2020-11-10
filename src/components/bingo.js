import React, { useState } from "react";
import { useBingoContext } from "../context/BingoContext";
import Bolillero from "./bolillero";
import Formulario from "./formulario";
import Talon from "./talon";
//import { db } from "../database";

const Bingo = () => {
  const { inputs, setInputs } = useBingoContext();
  const [LineasyColumnas, setLineasyColumnas] = useState({
    lineas: 0,
    columnas: 0,
  });
  const GuardarInputs = () => {
    let date = new Date(Date.now());
    const items = JSON.parse(localStorage.getItem("prueba"));
    localStorage.setItem(
      "prueba",
      JSON.stringify([
        ...items,
        {
          id: Date.now(),
          inputs: inputs,
          fecha: date.toLocaleDateString(),
          hora: date.getHours() + ":" + date.getSeconds(),
        },
      ])
    );
  };
  const [grid, setGrid] = useState();
  const handleSubmit = (state) => (e) => {
    e.preventDefault();
    if (state === "guardar") {
      if (Object.keys(inputs).length === 0) return;
      GuardarInputs();
      alert("se guardo correctamente");
      return;
    }
    setInputs({});
    let tempGrid = [];
    for (let i = 0; i < state.lineas; i++) {
      tempGrid.push([]);
      for (let j = 0; j < state.columnas; j++) {
        tempGrid[i].push(j * state.lineas + i + 1);
      }
    }
    setLineasyColumnas(state);
    setGrid(tempGrid);
  };
  return (
    <>
      <div className="row m-auto justify-content-center">
        <div className="col-md-auto">
          <Formulario submit={handleSubmit} />
        </div>
      </div>
      <div className="row justify-content-center m-2">
        <div className="col-md-auto">
          {LineasyColumnas.lineas === 0 ? null : (
            <Bolillero
              numeroMax={LineasyColumnas.lineas * LineasyColumnas.columnas || 0}
            />
          )}
        </div>
      </div>
      <div className="row justify-content-center">
        {grid ? <Talon grid={grid} lineasyColumnas={LineasyColumnas} /> : null}
      </div>
    </>
  );
};

export default Bingo;
