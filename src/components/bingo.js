import React, { useState } from "react";
import Bolillero from "./bolillero";
import Formulario from "./formulario";
import Talon from "./talon";

const Bingo = () => {
  const [LineasyColumnas, setLineasyColumnas] = useState({
    lineas: 0,
    columnas: 0,
  });
  const [grid, setGrid] = useState();
  const handleSubmit = (state) => (e) => {
    e.preventDefault();
    let tempGrid = [];
    for (let i = 0; i < state.lineas; i++) {
      for (let j = 0; j < state.columnas; j++) {
        tempGrid.push(j * state.lineas + i + 1);
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
