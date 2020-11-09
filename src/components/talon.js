import React from "react";
import useGrid from "../hooks/useGrid";

const Talon = ({ grid, lineasyColumnas }) => {
  const [tabla, inputs] = useGrid({ grid, lineasyColumnas });
  return (
    <div className="col-md-auto tableWrapper">{!tabla ? null : tabla}</div>
  );
};

export default Talon;
