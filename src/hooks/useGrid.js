import React, { useCallback, useEffect, useState } from "react";

const useGrid = ({ grid, lineasyColumnas }) => {
  const [tabla, setTabla] = useState();
  const [inputs, setInputs] = useState({});

  const handleChange = useCallback(
    (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    },
    [inputs]
  );

  useEffect(() => {
    if (grid.length === 0) {
      setTabla(null);
      setInputs({});
    }
  }, [grid.length]);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.className.includes("selected")) {
        e.target.className = "p-5 font-weight-bold user-select-none";
      } else {
        e.target.className += " selected";
      }
    };

    let tableTemp = (
      <table className="table table-responsive table-bordered table-striped table-secondary">
        <tbody>
          {grid.map((rows, indexRow) => (
            <tr key={indexRow}>
              {rows.map((cols, indexCol) => (
                <td
                  onClick={handleClick}
                  key={indexCol}
                  className="p-5 font-weight-bold user-select-none"
                >
                  {cols}
                </td>
              ))}
              <td className="form-group">
                <span>Nombre</span>
                <input
                  type="text"
                  name={indexRow + 1}
                  id=""
                  onBlur={handleChange}
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
  }, [grid, lineasyColumnas, handleChange]);

  return [tabla, inputs];
};

export default useGrid;
