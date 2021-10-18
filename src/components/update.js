import { Button, Modal, Form } from "react-bootstrap";
import React, { useState } from "react";

function Update({ employees, isOpen, closeModal, handleEdit }) {
  const [empname, setEmpname] = useState("");
  const [empsal, setEmpsal] = useState("");
  const [empage, setEmpage] = useState("");

  return (
    <div>
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleEdit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Employee Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="empname"
                onChange={(e) => setEmpname(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Employee Salary</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter salary"
                name="empsal"
                onChange={(e) => setEmpsal(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Employee Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter age"
                name="empage"
                onChange={(e) => setEmpage(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="success"
              type="submit"
              disabled={
                empname === "" || empsal === "" || empage === "" ? true : false
              }
            >
              Save
            </Button>

            <Button variant="danger" onClick={closeModal}>
              Dismiss
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Update;
