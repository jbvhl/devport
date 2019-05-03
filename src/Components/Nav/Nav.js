import React from "react";
import { Link } from "react-router-dom";
import './nav.css';

export default class Nav extends React.Component {
  render() {
    return (
      <inline>
        <Link to="/about">Discover Me </Link>|
        <Link to="/portfolio"> Portfolio </Link>|
        <Link to="/contact"> Contact Me</Link>
      </inline>
    );
  }
}
