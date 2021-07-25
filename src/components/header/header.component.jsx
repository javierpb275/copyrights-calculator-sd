import React from "react";
import "./header.styles.css";
import iberleyColexLogo from "../../assets/logos/iberley-colex.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img alt="iberley-colex-logo" src={iberleyColexLogo} width="300px" />
      <h1 className="header-title">CÁLCULO DE DERECHOS DE AUTOR</h1>
    </div>
  );
};

export default Header;
