import { data } from "../../services/serviceApi";
import Button from "../button/Button";
import "./css/BodyContent.css";
const BodyContent = () => {
  return (
    <>
      <div className="body-content">
        <div className="header d-flex align-items-center justify-content-between">
          <div className="forward">
            <span className="back d-inline-block text-capitalize mb-1 font-weight-bold">
              <i className="fa fa-arrow-left" area-hidden="true"></i>
              <span className="d-inline-block text-back ml-2">retour</span>
            </span>
            <h3 className="text-capitalize">discusions</h3>
            <p className="target font-weight-bold">
              Elements porteur verticaux
            </p>
          </div>
          <Button>
            <div className="btn btn-primary py-2">
              <li className="link-item font-weight-bold">
                <i className="fa fa-plus mr-2" aria-hidden="true"></i>
                <a href="#">Nouveau sujet</a>
              </li>
            </div>
          </Button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">sujet</th>
              <th scope="col">catégories</th>
              <th scope="col">vues</th>
              <th scope="col">reponses</th>
              <th scope="col">dernière activité</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => {
              return (
                <tr key={i}>
                  <th
                    className="subject text-truncate font-weight-bold"
                    scope="row"
                  >
                    {d.subject}
                  </th>
                  <td className="category font-weight-bold">{d.category}</td>
                  <td className="font-weight-bold">{d.views}</td>
                  <td className="font-weight-bold">{d.responses}</td>
                  <td className="font-weight-bold">{d.lastactivity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BodyContent;
