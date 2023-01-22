import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { variables } from "./Variables";
//import { Test } from "../src/Components/Test.js";
// import { Link } from "react-router-dom";
// import { ListGroup, ListGroupItem, Button } from "reactstrap";

function RegistrationForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [post, setPost] = React.useState([]);
  // useEffect(() => {
  //   axios
  //     .get(variables + "assign")
  //     .then((response) => {
  //       setPost(response.data);
  //     })
  //     .then((error) => error.data);
  // });

  const listItems = post.map((user) => {
    return (
      <tr>
        <td className="checkbox-block">
          <div className="checkbox-item">
            <input type="checkbox" />
          </div>
        </td>
        <td>{user.id}</td>
        <td>{user.resourceName}</td>
        <td>{user.techTrack}</td>
        <td>{user.startDate}</td>
        <td>{user.endDate}</td>
        <td>{user.manager}</td>
        <td>{user.sme}</td>
        <td>{user.smeStatus}</td>
        <td>
          <button className="btnEdit">Edit </button>
          <span></span>
          <button className="date-block">Delete</button>
        </td>
      </tr>
    );
  });

  React.useEffect(() => {
    axios.get(variables.API_URL + "Assign").then((response) => {
      setPost(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <body>
        <div className="wrapper">
          <section className="container">
            <div className="sub-heading">
              <h2>All Programs</h2>
              /*
              <div className="newtaskpopup">
                <Button variant="primary" onClick={handleShow}>
                  NEW TASK
                </Button>
              </div>
            </div>
            <div className="table">
              <table>
                <thead>
                  <tr>
                    <td className="checkbox-block">
                      <div className="checkbox-item">
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
                <tbody>{listItems}</tbody>
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
            {/* <form className="g-3">
              <label>VAM ID</label>
              <br></br>
              <input sn={10} type="text" className="formInputclassName"></input>
              <br></br>
              <label>Name</label>
              <br></br>
              <input type="text" className="formInputclassName"></input>
              <br></br>
              <label>Tech Track</label>
              <br></br>
              <input type="text" className="formInputclassName"></input>
              <br></br>
              <label>Start Date</label>
              <br></br>
              <input type="text" className="formInputclassName"></input>
              <br></br>
              <label>End Date</label>
              <br></br>
              <input type="text" className="formInputclassName"></input>
              <br></br>
              <label>Manager</label>
              <br></br>
              <input type="text" className="formInputclassName"></input>
              <br></br>
              <label>SME</label>
              <br></br>
              <input type="text" className="formInputclassName"></input>
              <br></br>
              <label>Status</label>
              <br></br>
              <input type="text" className="formInputclassName"></input>
            </form>  */}
            <form>
              <div className="row">
                <div className="col">
                  <label>VAM ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                  ></input>
                </div>
                <div className="col">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Tech Track</label>
                  <select
                    className="form-control"
                    id="inlineFormCustomSelectPref"
                  >
                    <option selected>----Select----</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Select Date</label>
                  <input
                    className="form-control"
                    type="date"
                    name="dob"
                    placeholder="Date of Birth"
                  ></input>
                </div>
                <div className="col">
                  <label>End Date</label>
                  <input
                    className="form-control"
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
