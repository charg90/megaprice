import { useState } from "react";

import PacmanLoader from "react-spinners/ClipLoader";

const Spinners = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#003d8f");

  return (
    <div className="d-flex justify-content-center">
      <PacmanLoader color={color} loading={loading} size={150} />
    </div>
  );
};

export default Spinners;
