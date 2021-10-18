import { ListGroup, Button } from "react-bootstrap";

function Read({ employees, openModal, handleRemove }) {
  return (
    <>
      {employees.map((employee) => (
        <div key={employee.id} className="square border border-dark w-50 p-2 mb-3 offset-3 bg-dark text-white">
          <ListGroup>
            <ListGroup.Item className="border-bottom">{employee.id}</ListGroup.Item>
            <ListGroup.Item className="border-bottom">{employee.employee_name}</ListGroup.Item>
            <ListGroup.Item className="border-bottom">{employee.employee_salary}</ListGroup.Item>
            <ListGroup.Item className="border-bottom">{employee.employee_age}</ListGroup.Item>
          </ListGroup>
          <Button className="square border border-danger mr-3" variant="danger" onClick={() => handleRemove(employee.id)}>
            Remove
          </Button>
          <Button className="square border border-success" variant="success" onClick={() => openModal(employee.id)}>
            Edit
          </Button>
        </div>
      ))}
    </>
  );
}

export default Read;
