import React from 'react';
import './about.css';

export default function About() {
  return (
    <div className="about-container">

      <div className="about-content">

        <div className="about-heading">
          <h1>About us</h1>
        </div>

        <div className="about-text">
          <p>In this website we try to provide the study material of Gandhinagar University college.</p>
        </div>

        <div className="disclaimer">
          <p>Please note that this is not offical website of Gandhinagar University</p>
        </div>

        {/* <div className="contributer">
          <p>Kapadiya Pavan - 2202101005029</p>
          <p>Lodha Krunal - 2202101005035</p>
        </div> */}
      </div>
    </div>
  );
}
