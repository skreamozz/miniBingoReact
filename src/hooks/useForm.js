import { useState } from "react";

/**
 *
 * @param {Object} initState
 * objeto con los nombres y los valores de los imputs
 * devuelve el estado actual y un handle que maneja el cambio en los input.
 */
const useForm = (initState) => {
  const [state, setState] = useState(initState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  return [state, handleChange];
};

export default useForm;
