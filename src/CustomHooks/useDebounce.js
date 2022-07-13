import { useState, useEffect } from "react";

export const useDebounce = (state) => {
  const [loading, setLoading] = useState(state);

  useEffect(() => {
    setTimeout(() => {
      console.log(loading);
      setLoading(false);
    }, "1000");
    console.log(loading);
  }, []);
  return [loading];
};
