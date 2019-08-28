import React from "react";
import pelapak from "../static/img/pelapak.png";
import { Link } from "react-router-dom";
import "../static/css/styles.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <img src={pelapak} alt="" className="homeimage" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center">
              <h6 className="hometext">Raden</h6>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8 text-center marginhome">
              <Link
                to="/daftar"
                class="btn btn-outline-info btn-lg button1"
                href="#"
                role="button"
              >
                Daftar
              </Link>
              <br />
              <Link
                to="/masuk"
                class="btn btn-outline-info mt-1 btn-lg button2"
                href="#"
                role="button"
              >
                Masuk
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
