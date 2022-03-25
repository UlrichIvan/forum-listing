import React from "react";
import "./css/bodyheader.css";
const BodyHeader = () => {
  return (
    <>
      <div className="body-header">
        <span className="back d-inline-block text-capitalize font-weight-bold">
          <i className="fa fa-arrow-left" area-hidden="true"></i>
          <span className="d-inline-block text-back ml-2">retour</span>
        </span>
      </div>
    </>
  );
};

export default BodyHeader;
