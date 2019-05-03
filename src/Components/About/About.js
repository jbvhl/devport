import React from "react";
import "./about.css";

export default class About extends React.Component {
  render() {
    return (
      <>
        <div className="about">
          <h1>Helping the world one line of code at a time.</h1>
          <p>
            Bao is an <inline stlye={{ color: "pink" }}>ambitious</inline>{' '}
            individual that{' '}
            <inline style={{ textDecoration: "underline" }}>
              thrives under pressure
            </inline>
            . A creative & driven person with strong work ethics. She has a love
            for backend and security but enjoys full stack web development.
          </p>
        </div>
        <div className="skills">
          <h1>Skills</h1>
        </div>
      </>
    );
  }
}
