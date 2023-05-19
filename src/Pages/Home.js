import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteUser } from "../Reducer";
import Usertable from "../components/Usertable";
import Cancel from '../Utils/images/cancel.png';
 

function Home() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState("");
  const users = useSelector((state) => state.users.users);
  const handleClose = () => {
    setDeleteId("");
    setShow(false);
  };
  const handleShow = (id) => {
    setDeleteId(id);
    setShow(true);
  };

  const deleteHandler = () => {
    dispatch(deleteUser({ id: deleteId }));
    handleClose();
  };

  const columns = [
    {
      id:1,
      label:"Name",
      value:"name"
    },
    {
      id:2,
      label:"Email",
      value:"email"
    },
    {
      id:3,
      label:"Username",
      value:"username"
    },
    {
      id:4,
      label:"Mobile",
      value:"mobile"
    },
    {
      id:5,
      label:"Rolekey",
      value:"roleKey"
    }
  ]

  return (
    <div className="container bg-white">
      <div className="page-title">
        <h3>All records </h3>
        <Link to="/addrecord">
          <button type="button" className="btn btn-primary">
            Add Data
          </button>
        </Link>
      </div>
      <div className="auto-scroll">
        <Usertable columns={columns} rows={users} modalfunc={handleShow}/>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="delete-icons">
            {" "}
            <img src={Cancel} />
          </div>
          <div className="popup-info">Are you sure?</div>
          <div className="popup-info-m">
            Do you really want to delete this record? This process cannot be
            undone
          </div>
        </Modal.Body>
        <div className="popup-action">
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="danger" onClick={deleteHandler}>
            Delete
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
