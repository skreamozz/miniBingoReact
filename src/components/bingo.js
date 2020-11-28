import React, { useState } from "react";
import { useBingoContext } from "../context/BingoContext";
import Bolillero from "./bolillero";
import Formulario from "./formulario";
import Talon from "./talon";
import { Modal } from "./Modal";

const Bingo = () => {
  const { inputs, setInputs } = useBingoContext();
  const [grid, setGrid] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(true);
  /**
   * metodo para guardar los inputs en el local storage
   */
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const openModal = () => {
    Limpiar();
    setIsOpenModal(true);
  };
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

  const Limpiar = () => {
    setGrid([]);
    setInputs({});
  };

  const GenerarGrilla = (state) => {
    Limpiar();
    let tempGrid = [];
    for (let i = 0; i < state.lineas; i++) {
      tempGrid.push([]);
      for (let j = 0; j < state.columnas; j++) {
        tempGrid[i].push(j * state.lineas + i + 1);
      }
    }

    setGrid(tempGrid);
    setIsOpenModal(false);
  };
  /**
   *
   * @param {*} state
   * metodo que maneja el evento submit del formulario
   * posibles parametros  'guardar', 'limpiar', o un objeto
   * {lineas:number, columnas:number}
   */
  const handleSubmit = (state) => (e) => {
    e.preventDefault();
    if (state === "guardar") {
      if (Object.keys(inputs).length === 0) return;
      GuardarInputs();
      alert("se guardo correctamente");
      Limpiar();

      return;
    }
    GenerarGrilla(state);
  };
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-2 align-self-center">
          <div className="py-2">
            <Bolillero numeroMax={grid?.length * grid[0]?.length || 0} />
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-2">
        <div className="col-md-auto">
          <div className="row">
            <div className="col ">
              <button
                onClick={openModal}
                className="btn btn-outline-primary btn-sm m-2"
              >
                Nuevo
              </button>
              <button
                onClick={handleSubmit("guardar")}
                className="btn btn-outline-success btn-sm m-2"
              >
                Guardar
              </button>
            </div>
          </div>
          {grid.length > 0 && <Talon grid={grid} />}
        </div>
      </div>
      <Modal show={isOpenModal} closeModal={closeModal}>
        <Formulario submit={handleSubmit} />
      </Modal>
    </>
  );
};

export default Bingo;
