import React, { useState } from "react";
import Formulario from "./formulario";
import Talon from "./talon";

const Bingo = () => {
  const [LineasyColumnas, setLineasyColumnas] = useState();
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
      <div className="row m-auto">
        <div className="col-md-auto">
          <Formulario submit={handleSubmit} />
        </div>
      </div>
      <div className="row">
        {grid ? <Talon grid={grid} lineasyColumnas={LineasyColumnas} /> : null}
      </div>
    </>
  );
};

export default Bingo;
