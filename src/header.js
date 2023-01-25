import React from "react";
import "./css/main.css";
import "bootstrap-icons/font/bootstrap-icons.css";
function Header() {
  return (
    <nav className="bg-dark navbar-dark navbar">
      <header className="vm-header d-flex">
        <div className="logo">
          <h1>Program Tracker</h1>
        </div>
        <div className="Serchboxdiv">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder=""
              aria-label="Search"
            />
          </div>
        </div>

        {
          <div className="itemField Notificationdiv image">
            {/* <img
            className="imagedev"
            src={require("./assets/images/bell-img.png")}
            alt="test"
          />
          <a href="{{ url('/image/'.$image->id.'/delete') }}">
            <button type="button" className="btnNotification"></button>
          </a> */}
          </div>
        }

        <div className="user-info-block">
          <div className="user-avathar">
            <span>RK</span>
          </div>
          <div className="user-info">
            <span>Rupesh Kumar</span>
            <i
              data-icon-name="ChevronDownMed"
              aria-hidden="true"
              className="ms-Icon root-43"
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
