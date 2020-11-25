import React from "react";
import useGrid from "../hooks/useGrid";

const Talon = ({ grid }) => {
  const [tabla] = useGrid(grid);
  return (
    <div className="col-md-auto tableWrapper">{!tabla ? null : tabla}</div>
  );
};

export default Talon;
