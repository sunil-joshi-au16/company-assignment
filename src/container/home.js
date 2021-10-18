import React, { useEffect, useState } from "react";
import axios from "axios";
import Read from "../components/read";
import Update from "../components/update";

let tempEmployees, empId;

function Home() {
  let [employees, setEmployees] = useState([]);
  const [isOpen, setIsopen] = useState(false);

  const openModal = (id) => {
    console.log(id);
    empId = id;
    console.log(empId);
    setIsopen(true);
  };

  const closeModal = () => {
    setIsopen(false);
  };

  const handleRemove = (id) => {
    alert(`are you sure you want to delete entry with id ${id}?`);
    console.log(id);
    tempEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(tempEmployees);
    axios
      .delete(`https://dummy.restapiexample.com/api/v1/delete/${id}/`)
      .then((response) => {
        // setEmployees(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    tempEmployees = employees.map((employee) => {
      if (employee.id === empId) {
        employee.employee_name = e.target.empname.value;
        employee.employee_salary = e.target.empsal.value;
        employee.employee_age = e.target.empage.value;
      }
      return employee;
    });
    console.log(tempEmployees);
    setEmployees(tempEmployees);
    console.log(e.target.empname.value);
    console.log(e.target.empsal.value);
    console.log(e.target.empage.value);
    axios
      .put(`https://dummy.restapiexample.com/public/api/v1/update/${e.id}`)
      .then((response) => {
        // setEmployees(response.data.data);
      })
      .catch((error) => console.log(error));
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
      <Read
        employees={employees}
        openModal={openModal}
        handleRemove={handleRemove}
      />
      <Update
        employees={employees}
        isOpen={isOpen}
        closeModal={closeModal}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default Home;
