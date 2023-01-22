import React, { useState } from "react";
import "./style.css";
function LeftNavigation() {
  return (
    <body>
      <div className="wrapper">
        <section className="container">
          <div className="sub-heading">
            <h2>My Task</h2>
          </div>
          <div className="folderInfo" onClick={() => this.GetAllDocuments()}>
            <span className="folder"></span>
            <span className="folderName">All Programs</span>
          </div>
          <div className="folderInfo" onClick={() => this.GetAllDocuments()}>
            <span className="folder"></span>
            <span className="folderName">Today Programs</span>
          </div>
          <div className="table"></div>
        </section>
      </div>
    </body>
  );
}
export default LeftNavigation;
