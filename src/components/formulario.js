import React from "react";
import useForm from "../hooks/useForm";
import { Link } from "react-router-dom";

/**
 * @param {Function}submit
 * Evento desencadenado por el submit del formulario
 */
const Formulario = ({ submit }) => {
  const [state, handleChange] = useForm({ lineas: 0, columnas: 0 });
  return (
    <form onSubmit={submit(state)} className=" p-3 ">
      <div className="form-row">
        <div className="col">
          <div className="form-group">
            <label htmlFor="lineas">N° de lineas</label>
            <input
              onChange={handleChange}
              value={state.lineas}
              type="number"
              className="form-control"
              name="lineas"
              min={0}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-group">
            <label htmlFor="columnas">N° de columnas</label>
            <input
              value={state.columnas}
              type="number"
              className="form-control"
              name="columnas"
              onChange={handleChange}
              min={0}
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="col">
          <div className="form-group">
            <input
              type="submit"
              value="Generar"
              className=" m-2 btn btn-primary"
            />
            <Link to="/lista" className="btn btn-success m-2 ">
              Listado
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Formulario;
