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
  }, [grid, handleChange]);

  return [tabla];
};

export default useGrid;
