import React from "react";
import "./css/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function Header() {
  return (
    <nav class="bg-dark navbar-dark navbar">
      <header class="vm-header d-flex">
        <div class="logo">
          <h1>Program Tracker</h1>
        </div>
        <div class="Serchboxdiv">
          <div class="form-outline">
            <input
              type="search"
              id="form1"
              class="form-control"
              placeholder=""
              aria-label="Search"
            />
          </div>
        </div>

        <div class="itemField Notificationdiv image">
          <img
            class="imagedev"
            src={require("./assets/images/bell-img.png")}
            alt="test"
          />
          <a href="{{ url('/image/'.$image->id.'/delete') }}">
            <button type="button" class="btnNotification"></button>
          </a>
        </div>

        <div class="user-info-block">
          <div class="user-avathar">
            <span>RK</span>
          </div>
          <div class="user-info">
            <span>Rupesh Kumar</span>
            <i
              data-icon-name="ChevronDownMed"
              aria-hidden="true"
              class="ms-Icon root-43"
            >
              
            </i>
          </div>
        </div>
      </header>
    </nav>
  );
}
export default Header;
