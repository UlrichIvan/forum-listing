import React from "react";

const BodyContentItem = ({ borderLeftColor }) => {
  return (
    <>
      <li
        className="body-content-item d-flex"
        style={{ borderLeft: "8px solid " + borderLeftColor }}
      >
        <div className="left w-50">
          <h3>Elements porteur verticaux</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio
            quasi rem sunt pariatur dolorem magnam accusamus distinctio, eaque
            enim ducimus?
          </p>
        </div>
        <div className="right w-50 d-flex flex-column">
          <div className="right-first w-100 ">
            <ul className="items px-0 d-flex align-items-center">
              <li className="item">
                <h5 className="text-capitalize">discusions</h5>
                <div className="item-count font-weight-bold">138</div>
              </li>
              <li className="item">
                <h5 className="text-capitalize">membres</h5>
                <div className="item-count font-weight-bold">893</div>
              </li>
            </ul>
          </div>
          <div className="right-second w-100 font-weight-bold">
            <h5 className="text-capitalize">dernier sujet</h5>
            <p className="text-truncate">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              mollitia officiis. Ad tempore ipsam consequatur in. Ipsa suscipit
              quasi rerum?
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default BodyContentItem;
