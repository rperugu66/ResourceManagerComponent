import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { variables } from "./Variables";
//import { Test } from "../src/Components/Test.js";

//import axios from "axios";
//import axios from "axios";
//import { variables } from ".Variables.js";

function RegistrationForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post, setPost] = React.useState([]);
  const listItems = post.map((element) => {
    return (
      <div>
        {element.date}
        {element.temperatureC}
      </div>
    );
  });

  React.useEffect(() => {
    axios.get(variables.API_URL + "WeatherForecast").then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <body>
        <div class="wrapper">
          <section class="container">
            <div class="sub-heading">
              <h2>All Programs</h2>
              /*
              <div class="newtaskpopup">
                <Button variant="primary" onClick={handleShow}>
                  NEW TASK
                </Button>
              </div>
            </div>
            <div class="table">
              <table>
                <thead>
                  <tr>
                    <td class="checkbox-block">
                      <div class="checkbox-item">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td>VAM ID</td>
                    <td>Resource Name</td>
                    <td>Tech Track</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                    <td>Manager</td>
                    <td>SME</td>
                    <td>Status</td>
                    <td>Actions</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="checkbox-block">
                      <div class="checkbox-item">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td>{listItems[1]}</td>

                    <td>
                      <button class="btnEdit">Edit </button>
                      <span></span>
                      <button class="date-block">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-block">
                      <div class="checkbox-item">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td>
                      <button class="btnEdit">Edit </button>
                      <button class="date-block">Delete</button>
                    </td>
                  </tr>
                  <tr>
                    <td class="checkbox-block">
                      <div class="checkbox-item">
                        <input type="checkbox" />
                      </div>
                    </td>
                    <td>6748</td>
                    <td>Rupesh Kumar</td>
                    <td class="btnLink">
                      <u>JAVA</u>
                    </td>
                    <td>13/01/23</td>
                    <td>15/02/23</td>
                    <td>Sarojini</td>
                    <td>Vasudha</td>
                    <td>Open</td>
                    <td>
                      <button class="btnEdit">Edit </button>
                      <button class="date-block">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </body>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* <form class="g-3">
              <label>VAM ID</label>
              <br></br>
              <input sn={10} type="text" class="formInputClass"></input>
              <br></br>
              <label>Name</label>
              <br></br>
              <input type="text" class="formInputClass"></input>
              <br></br>
              <label>Tech Track</label>
              <br></br>
              <input type="text" class="formInputClass"></input>
              <br></br>
              <label>Start Date</label>
              <br></br>
              <input type="text" class="formInputClass"></input>
              <br></br>
              <label>End Date</label>
              <br></br>
              <input type="text" class="formInputClass"></input>
              <br></br>
              <label>Manager</label>
              <br></br>
              <input type="text" class="formInputClass"></input>
              <br></br>
              <label>SME</label>
              <br></br>
              <input type="text" class="formInputClass"></input>
              <br></br>
              <label>Status</label>
              <br></br>
              <input type="text" class="formInputClass"></input>
            </form>  */}
            <form>
              <div class="row">
                <div class="col">
                  <label>VAM ID</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder=""
                  ></input>
                </div>
                <div class="col">
                  <label>Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Last name"
                  ></input>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Tech Track</label>
                  <select class="form-control" id="inlineFormCustomSelectPref">
                    <option selected>----Select----</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="col">
                  <label>Select Date</label>
                  <input
                    class="form-control"
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                  ></input>
                </div>
                <div class="col">
                  <label>End Date</label>
                  <input
                    class="form-control"
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                  ></input>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegistrationForm;
