import React, { useCallback, useEffect, useState } from "react";
import { useBingoContext } from "../context/BingoContext";

const useGrid = (grid) => {
  const [tabla, setTabla] = useState();
  const { inputs, setInputs } = useBingoContext();

  const handleChange = useCallback(
    (e) => {
      setInputs({ ...inputs, [e.target.name]: e.target.value });
    },
    [inputs, setInputs]
  );

  useEffect(() => {
    if (grid.length === 0) {
      setTabla(null);
      setInputs({});
    }
  }, [grid.length, setInputs]);

  useEffect(() => {
    const handleClick = (e) => {
      e.target.classList.toggle("selected");
    };

    let tableTemp = (
      <table className="table rounded table-responsive table-bordered table-striped table-secondary">
        <tbody>
          {grid.map((rows, indexRow) => (
            <tr key={indexRow}>
              {rows.map((cols, indexCol) => (
                <td
                  onClick={handleClick}
                  key={indexCol}
                  className="display-4 font-weight-bold text-center user-select-none"
                >
                  {cols.toString().padStart(2, "00")}
                </td>
              ))}
              <td>
                <div className="form-row justify-content-center">
                  <div className="col">
                    <input
                      type="text"
                      name={indexRow + 1}
                      id=""
                      placeholder="Nombre"
                      onBlur={handleChange}
                      style={{ minWidth: "8rem" }}
                      className="form-control form-control-lg bg-dark text-white font-weight-bold "
                    />
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    setTabla(tableTemp);
  }, [grid, handleChange]);

  return [tabla];
};

export default useGrid;
