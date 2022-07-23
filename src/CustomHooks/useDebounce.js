import { useState, useEffect } from "react";

// crea un delay para que en todas las url se pueda mostrar el spinner
export const useDebounce = (state) => {
  const [loading, setLoading] = useState(state);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, "1000");
  }, []);
  return [loading];
};
