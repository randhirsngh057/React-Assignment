import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function Usertable({ columns, rows, modalfunc }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.id}>{column.label}</th>
          ))}
          <th className="action-width"> Action</th>
        </tr>
      </thead>
      {rows?.length > 0 ? (
        <tbody>
          {rows.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.mobile}</td>
              <td>{user.roleKey}</td>
              <td>
                <div className="action-btn">
                  <Link to={`/updaterecord/${user.id}`}>
                    <button type="button" className="btn btn-success mr-10">
                      Edit
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-danger"
                    variant="primary"
                    onClick={() => modalfunc(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      ) : (
        <div className="no-records">No records</div>
      )}
    </Table>
  );
}

export default Usertable;
