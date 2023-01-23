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
  const intialState = {
    vamid: 0,
    techTrack: "",
    resourceName: "",
    startDate: new Date(),
    endDate: new Date(),
    manager: "",
    sme: "",
  };

  const handleShow = () => setShow(true);
  const [post, setPost] = React.useState([]);
  const [form, setForm] = useState(intialState);
  const [techTracks, setTechTracks] = useState([]);

  const listItems = post.map((user) => {
    return (
      <tr>
        <td>{user.vamid}</td>
        <td>{user.resourceName}</td>
        <td>{user.techTrack}</td>
        <td>{user.startDate}</td>
        <td>{user.endDate}</td>
        <td>{user.manager}</td>
        <td>{user.sme}</td>
        <td>{user.smeStatus}</td>
        <td>
          <button className="btnEdit" onClick={() => handleEditFrom(user.id)}>
            Edit{" "}
          </button>
          <span></span>
          <button className="date-block">Delete</button>
        </td>
      </tr>
    );
  });
  // To refresh data for Table
  const GetResourceData = () => {
    axios.get(variables.API_URL + "Assign").then((response) => {
      setPost(response.data);
      console.log(response.data);
      console.log("post data", post);
    });
  };

  const GetTechTrackers = () => {
    //get Options for TechTrack
    axios
      .get(variables.API_URL + "ProgramTracker/GetTechTracks")
      .then((response) => {
        console.log("Tracks", response.data);
        var responsedata = response.data;
        responsedata.unshift("---Select Tech Track---");
        setTechTracks(responsedata);
      })
      .then((json) => {
        console.log("Data Tracks", json);
        //setTechTracks((data) => setTechTracks(data));
      });
  };

  // Component did Mount
  React.useEffect(() => {
    GetResourceData();
    GetTechTrackers();
  }, []);

  // Handler to Update State of Form Control
  const handleChange = (evt) => {
    const name = evt.target.name;
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Refresh Data
  // React.useEffect(() => {
  //   GetResourceData();
  // });

  // Submit Handler
  const handleSubmit = () => {
    //alert(form);
    console.log(form);
    // Send Data to Our Api
    CreateResource();
  };

  const handleClose = () => {
    setForm(intialState);
    setShow(false);
  };

  const CreateResource = (resource) => {
    console.log("Create Resource Method Callled");
    axios
      .post(variables.API_URL + "Assign", form, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // Refresh Data After Submit
        GetResourceData();
        //Close Model
        handleClose();
      })
      .then((error) => console.log("Post Error", error));
  };
  // React.useEffect(() => {
  //   console.log("form data updated", form);
  // }, [form]);

  // All Code Related to Edit Form
  const editState = {
    vamid: 0,
    techTrack: "",
    resourceName: "",
    startDate: new Date(),
    endDate: new Date(),
    manager: "",
    sme: "",
  };
  const [editForm, setEditForm] = useState(editState);
  const [showEdit, setShowEdit] = useState(false);
  //Intial Object of From

  const GetUserDataById = (id) => {
    var url = variables.API_URL + `Assign/${id}`;
    axios
      .get(variables.API_URL + `Assign/${id}`)
      .then((response) => {
        setEditForm(response.data);
        console.log("UserById", response.data);
      })
      .then((json) => {
        console.log("Error In Getting Selected User Data", json);
      });
  };

  const handleEditFrom = (id) => {
    GetUserDataById(id);
    setShowEdit(true);
  };

  const handleCloseEdit = () => {
    setShowEdit(false);
  };

  return (
    <>
      <body>
        <div className="wrapper">
          <section className="container">
            <div className="sub-heading">
              <h2>All Programs</h2>

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
            <form>
              <div className="row">
                <div className="col">
                  <label>VAM ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="vamid"
                    value={form.vamid}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="col">
                  <div className="col">
                    <label>Tech Track</label>
                    <select
                      className="form-control"
                      id="inlineFormCustomSelectPref"
                      name="techTrack"
                      value={form.techTrack}
                      onChange={handleChange}
                      //defaultValue="----Select----"
                      // options={getTechTracksLists}
                    >
                      {techTracks.map((e, key) => {
                        return (
                          <option key={key} value={e}>
                            {e}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="resourceName"
                    value={form.resourceName}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Select Date</label>
                  <input
                    className="form-control"
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    value={form.startDate}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="col">
                  <label>End Date</label>
                  <input
                    className="form-control"
                    type="date"
                    name="endDate"
                    placeholder="End Date"
                    value={form.endDate}
                    onChange={handleChange}
                  ></input>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Manager Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Manager name"
                      name="manager"
                      value={form.manager}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>SME Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="SME name"
                      name="sme"
                      value={form.sme}
                      onChange={handleChange}
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Edit Model */}
      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <form>
              <div className="row">
                <div className="col">
                  <label>VAM ID</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder=""
                    name="vamid"
                    value={editForm.vamid}
                    onChange={handleEditFrom}
                  ></input>
                </div>
                <div className="col">
                  <div className="col">
                    <label>Tech Track</label>
                    <select
                      className="form-control"
                      id="inlineFormCustomSelectPref"
                      name="techTrack"
                      value={editForm.techTrack}
                      onChange={handleEditFrom}
                      //defaultValue="----Select----"
                      // options={getTechTracksLists}
                    >
                      {techTracks.map((e, key) => {
                        return (
                          <option key={key} value={e}>
                            {e}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="resourceName"
                    value={editForm.resourceName}
                    onChange={handleEditFrom}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <label>Select Date</label>
                  <input
                    className="form-control"
                    type="date"
                    name="startDate"
                    placeholder="Start Date"
                    value={editForm.startDate}
                    onChange={handleEditFrom}
                  ></input>
                </div>
                <div className="col">
                  <label>End Date</label>
                  <input
                    className="form-control"
                    type="date"
                    name="endDate"
                    placeholder="End Date"
                    value={editForm.endDate} 
                    onChange={handleEditFrom}
                  ></input>
                </div>
                <div className="row">
                  <div className="col">
                    <label>Manager Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Manager name"
                      name="manager"
                      value={editForm.manager}
                      onChange={handleEditFrom}
                    ></input>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <label>SME Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="SME name"
                      name="sme"
                      value={editForm.sme}
                      onChange={handleEditFrom}
                    ></input>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RegistrationForm;
