import React from "react";
import Formulario from "./formulario";

const bingo = () => {
  const handleSubmit = (state) => (e) => {
    e.preventDefault();
  };
  return (
    <div className="row">
      <div className="col-md-6">
        <Formulario submit={handleSubmit} />
      </div>
    </div>
  );
};

export default bingo;
