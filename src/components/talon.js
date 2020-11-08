import React, { useEffect, useState } from "react";

const Talon = ({ grid, lineasyColumnas }) => {
  const [tabla, setTabla] = useState();
  const handleClick = (e) => {
    if (e.target.className.includes("selected")) {
      e.target.className = "p-5 font-weight-bold";
    } else {
      e.target.className += " selected";
    }
  };

  useEffect(() => {
    let gridTemp = [];
    for (let i = 0; i < lineasyColumnas.lineas; i++) {
      gridTemp.push([]);
      for (let j = 0; j < lineasyColumnas.columnas; j++) {
        gridTemp[i].push(grid[i * lineasyColumnas.columnas + j]);
      }
    }
    let tableTemp = (
      <table className="table table-responsive table-bordered table-striped table-secondary">
        <tbody>
          {gridTemp.map((rows, index) => (
            <tr key={index}>
              {rows.map((cols, index) => (
                <td
                  onClick={handleClick}
                  key={index}
                  className="p-5 font-weight-bold"
                >
                  {cols}
                </td>
              ))}
              <td className="form-group">
                <span>Nombre</span>
                <input
                  type="text"
                  name="dueño"
                  id=""
                  className="form-control bg-dark text-white"
                  style={{ minWidth: "100px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    setTabla(tableTemp);
  }, [grid, lineasyColumnas]);

  return (
    <div className="col-md-auto tableWrapper">{!tabla ? null : tabla}</div>
  );
};

export default Talon;
