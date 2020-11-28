import React from "react";
import useGrid from "../hooks/useGrid";

const Talon = ({ grid }) => {
  const [tabla] = useGrid(grid);
  return <div className="tableWrapper">{tabla && tabla}</div>;
};

export default Talon;
