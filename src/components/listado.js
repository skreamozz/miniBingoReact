import React, { useEffect, useState } from "react";
import { db } from "../database";
import { Link } from "react-router-dom";
const Listado = () => {
  const [listado, setListado] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const query = await db.get();
      const docs = await query.docs;
      const data = await docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setListado(data);
    };
    getData();
  }, []);

  const handleClick = (id) => async (e) => {
    await db.doc(id).delete();
    const query = await db.get();
    const docs = await query.docs;
    const data = await docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setListado(data);
  };
  return (
    <div>
      <Link to="/">
        <h1>Listado</h1>
      </Link>
      <table className="table table-responsive table-bordered table-secondary">
        {listado.map((dato, i) => (
          <tbody key={i}>
            <tr className="bg-dark text-white">
              <td>
                <div className="row justify-content-between ">
                  <div className="col">
                    <span>{`${dato.fecha} | ${dato.hora}`}</span>
                  </div>
                  <div className="col">
                    <button
                      className="btn btn-danger"
                      onClick={handleClick(dato.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="">
              <td>
                <table>
                  <tbody>
                    <tr>
                      {Object.keys(dato.inputs).map((key, i) => (
                        <td key={i}>{`${key} : ${dato.inputs[key]}`}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};
export default Listado;
