import React from "react";
import { Container } from "react-bootstrap";

const DetailWheater = () => {
  return (
    <>
      <Container
        className="tmp"
        style={{ width: "100%", backgroundColor: "rgba(238,238,238,.35)" }}
      >
        <div className="contDetail">
          <div className="divChildClass">
            <span className="detail1">Wind:</span>
            <span></span>
          </div>
          <div className="divChildClass">
            <span className="detail1">Humidity:</span>
            <span></span>
          </div>
          <div className="divChildClass">
            <span className="detail1">Dew Pt:</span>
            <span></span>
          </div>
          <div className="divChildClass">
            <span className="detail1">UV Index:</span>
            <span></span>
          </div>
          <div className="divChildClass">
            <span className="detail1">Visibility:</span>
            <span></span>
          </div>
          <div className="divChildClass">
            <span className="detail1">Pressure:</span>
            <span></span>
          </div>
        </div>
      </Container>
    </>
  );
};
export default DetailWheater;
