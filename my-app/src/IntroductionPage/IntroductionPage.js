import React from "react";
import logo from "../resources/images/logo.png";
import ConnectingButtons from "./ConnectingButtons";
import "./IntroductionPage.css";

const IntroductionPage = (props) => {
  return (
    <div className="introduction_page_container">
      <div className="introduction_page_panel">
        <img src={logo} alt="logo" className="introduction_page"></img>
        <ConnectingButtons />
      </div>
    </div>
  );
};

export default IntroductionPage;
