import { useState } from "react";
import { Col, Row } from "react-bootstrap";

import PacmanLoader from "react-spinners/PacmanLoader";

const Spinners = () => {
  let [loading] = useState(true);
  let [color] = useState("#003d8f");

  return (
    <Row>
      <Col className="d-flex justify-content-center mt-5 align-items-center">
        <PacmanLoader color={color} loading={loading} size={50} />
      </Col>
    </Row>
  );
};

export default Spinners;
