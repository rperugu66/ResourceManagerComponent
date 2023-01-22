import React, { useState } from "react";
import "./style.css";
function LeftNavigation() {
  return (
    <body>
      <div class="wrapper">
        <section class="container">
          <div class="sub-heading">
            <h2>My Task</h2>
          </div>
          <div class="folderInfo" onClick={() => this.GetAllDocuments()}>
            <span class="folder"></span>
            <span class="folderName">All Programs</span>
          </div>
          <div class="folderInfo" onClick={() => this.GetAllDocuments()}>
            <span class="folder"></span>
            <span class="folderName">Today Programs</span>
          </div>
          <div class="table"></div>
        </section>
      </div>
    </body>
  );
}
export default LeftNavigation;
