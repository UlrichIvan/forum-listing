import React from "react";
import logo from "./images/Group 91.png";
import "./css/footer.css";
import Button from "../button/Button";
const Footer = () => {
  return (
    <>
      <div className="footer container-fluid p-0">
        <div className="content d-flex">
          <div className="brand">
            <div className="logo">
              <img src={logo} alt="logo" width={187} height="48" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non,
                voluptas.
              </p>
            </div>
          </div>
          <div className="about">
            <h5 className="font-weight-bold">A propos</h5>
            <ul className="px-0">
              <li className="text-capitalize">
                <a href="#">qui sommes nous ?</a>
              </li>
              <li className="text-capitalize">
                <a href="#">Forum</a>
              </li>
              <li className="text-capitalize">
                <a href="#">Actualités</a>
              </li>
              <li className="text-capitalize">
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">CQG</a>
              </li>
            </ul>
          </div>
          <div className="reg">
            <h5 className="font-weight-bold">les réglementations</h5>
            <ul className="px-0">
              <li className="text-capitalize">
                <a href="#">Habitation</a>
              </li>
              <li className="text-capitalize">
                <a href="#">ERP</a>
              </li>
              <li className="text-capitalize">
                <a href="#">Code du travail</a>
              </li>
            </ul>
          </div>
          <div className="new-letter d-flex flex-column">
            <h3 className="font-weight-bold text-capitalize">
              s'inscrire à notre newsletter
            </h3>
            <div className="form-entry">
              <input type="text" placeholder="saisissez votre mail" />
              <Button>
                <div className="btn btn-primary py-2 ml-2">
                  <li className="link-item font-weight-bold">
                    <i
                      className="fa fa-paper-plane mr-2"
                      aria-hidden="true"
                    ></i>
                    <a className="text-capitalize" href="#">
                      s'incrire
                    </a>
                  </li>
                </div>
              </Button>
            </div>
            <div className="cdg d-flex align-items-center mt-2">
              <input type="checkbox" />
              <label className="label-check mb-0 ml-1" htmlFor="check">
                j'accepte les conditions génerales
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
