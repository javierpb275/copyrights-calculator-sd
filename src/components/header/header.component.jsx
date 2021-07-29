import React from "react";
import "./header.styles.scss";
import iberleyColexLogo from "../../assets/logos/iberley-colex.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="iberley-colex-logo" src={iberleyColexLogo} width="300px" />
      </Link>
      <h1 className="header-title">CÁLCULO DE DERECHOS DE AUTOR</h1>
    </div>
  );
};

export default Header;
