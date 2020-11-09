import React, { useContext, useState } from "react";

const context = React.createContext();

export const BingoProvider = (props) => {
  const [inputs, setInputs] = useState({});
  const value = { inputs, setInputs };
  return <context.Provider value={value} {...props}></context.Provider>;
};

export const useBingoContext = () => {
  const bingoContext = useContext(context);
  if (!bingoContext) {
    throw new Error("fuera de contexto");
  }
  return bingoContext;
};
