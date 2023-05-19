import Table from 'react-bootstrap/Table';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUser } from './Reducer';

function Home() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const [deleteId,setDeleteId] = useState('');
    const users = useSelector((state) => state.users.users);
    const handleClose = () => {
        setDeleteId('');
        setShow(false);
    };
    const handleShow = (id) => {
          setDeleteId(id);
          setShow(true)
    };

    const deleteHandler = () => {
         dispatch(deleteUser({ id : deleteId}));
         handleClose();
    }


  return (
    <div className='container bg-white'>
    <div className='page-title'>
        <h3>All records </h3>
        <Link to="/addrecord"><button type="button" className="btn btn-primary">Add Data</button></Link>

    </div>
    <div className='auto-scroll'> 
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Mobile</th>
          <th>Role</th>
          <th className='action-width'> Action</th>
        </tr>
      </thead>
      {users?.length > 0 ? (
      <tbody>
        {users.map((user,index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.mobile}</td>
          <td>{user.roleKey}</td>
          <td> 
            <div className='action-btn'>
            <Link to={`/updaterecord/${user.id}`}><button type="button" className="btn btn-success mr-10">Edit</button></Link>
            <button type="button" className="btn btn-danger" variant="primary" onClick={() => handleShow(user.id)}>Delete</button>
            </div>
           </td>
        </tr>
        ))}
      </tbody>
      ) : (
        <div className='no-records'>No records</div>
      )}
    </Table>
    </div>
    <Modal show={show} onHide={handleClose}>
        <Modal.Body>
         <div className='delete-icons'>  <img src='./assets/images/cancel.png'/></div>   
            <div className='popup-info'>
                Are you sure?
            </div>
            <div className='popup-info-m'>
            Do you really want to delete this record? This process cannot be undone
            </div>
        </Modal.Body>
        <div className='popup-action'>
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