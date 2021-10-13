import { useState, useEffect } from "react";
import axios from "axios";
import { ListGroup, Button, Modal } from "react-bootstrap";

function Fetch() {
  const [employees, setEmployees] = useState([]);
  const [isOpen, setIsopen] = useState(false);
  //   console.log(employees);
  const openModal = () => {
    setIsopen(true);
  };
  const closeModal = () => {
    setIsopen(false);
  };

  const handleRemove = (id) => {
    alert(`are you sure you want to delete entry with id ${id}?`);
    axios
      .delete(`https://dummy.restapiexample.com/api/v1/delete/${id}/`)
      .then((response) => {
        console.log(response.data.data);
        setEmployees(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (e) => {
    axios
      .put(`https://dummy.restapiexample.com/public/api/v1/update/${e.id}`)
      .then((response) => {
        console.log(response.data.data);
        setEmployees(response.data.data);
      })
      .catch((error) => console.log(error));

    // employees.map(employee => {
    //   if(e.id == employee.id) {
    //     employee.employee_name = e.employee_name
    //   }
    // })
    closeModal();
  };

  useEffect(() => {
    axios
      .get("https://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        console.log(response.data.data);
        setEmployees(response.data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {employees.map((employee) => (
        <ListGroup key={employee.id}>
          <ListGroup.Item>{employee.id}</ListGroup.Item>
          <ListGroup.Item>{employee.employee_name}</ListGroup.Item>
          <ListGroup.Item>{employee.employee_salary}</ListGroup.Item>
          <ListGroup.Item>{employee.employee_age}</ListGroup.Item>
          <Button variant="danger" onClick={() => handleRemove(employee.id)}>
            Remove
          </Button>
          <Button variant="success" onClick={() => openModal()}>
            Edit
          </Button>
        </ListGroup>
      ))}
      <Modal show={isOpen} onHide={closeModal}>
        <Modal.Header>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label>
              employee name
              <input type="text"></input>
            </label>
            <br />
            <label>employee salary</label>
            <input type="number"></input>
            <br />
            <label>employee age</label>
            <input type="number"></input>
            <br />
            <Button variant="success" onClick={(e) => handleEdit(e)}>
              save
            </Button>
            <Button variant="danger" onClick={closeModal}>
              close
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Fetch;
