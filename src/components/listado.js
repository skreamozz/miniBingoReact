import React, { useEffect, useState } from "react";
//import { db } from "../database";
import { Link } from "react-router-dom";
const Listado = () => {
  const [listado, setListado] = useState([]);
  const getData = () => {
    /*     const query = await db.get();
    const docs = await query.docs;
    const data = await docs.map((doc) => ({ ...doc.data(), id: doc.id })); */
    const data = JSON.parse(localStorage.getItem("prueba"));
    return data;
  };
  useEffect(() => {
    setListado(getData());
    //getData().then((data) => setListado(data));
  }, []);

  const handleClick = (id) => (e) => {
    const data = getData();
    const newData = data.filter((x) => x.id !== id);
    localStorage.setItem("prueba", JSON.stringify(newData));
    //await db.doc(id).delete();
    setListado(newData);
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
              <td className="">
                <div className="row justify-content-between ">
                  <div className="col-auto align-self-center">
                    <span>{`${dato.fecha} | ${dato.hora}`}</span>
                  </div>
                  <div className="col-auto align-self-center">
                    <button
                      className="btn btn-danger"
                      onClick={handleClick(dato.id)}
                    >
                      <i className="fas fa-trash-alt"></i>
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
