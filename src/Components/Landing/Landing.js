import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

export default class Landing extends React.Component {
  render() {
    return (
      <div className="landing">
        <inline>
          <Link to="/about">Discover Me </Link>|
          <Link to="/portfolio"> Portfolio </Link>|
          <Link to="/contact"> Contact Me</Link>
        </inline>
        <h1>Full Stack Web Developer</h1>
        <p>Innovative | Passionate | Ambitious</p>
      </div>
    );
  }
}
