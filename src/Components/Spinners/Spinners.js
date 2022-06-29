import { useState } from "react";

import PacmanLoader from "react-spinners/PacmanLoader";

const Spinners = () => {
  let [loading] = useState(true);
  let [color] = useState("#003d8f");

  return (
    <div className="d-flex justify-content-center mt-5">
      <PacmanLoader color={color} loading={loading} size={50} />
    </div>
  );
};

export default Spinners;
