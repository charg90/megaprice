import { useState, useEffect } from "react";

export const useDebounce = (state) => {
  const [loading, setLoading] = useState(state);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, "1000");
  }, []);
  return [loading];
};
