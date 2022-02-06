import { Modal, Button } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import Employee from "./Employee";
import AddForm from "./AddForm";

const EmployeeList = () => {
  const { sortedEmployees } = useContext(EmployeeContext);
  const { DefaultData } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [sortedEmployees]);
  const currentEmployees = sortedEmployees.slice();
  const mixed_Data = [...DefaultData, ...currentEmployees];

  return (
    <div className="container">
      <div className="add_btn">
        <Button className="add_emp_btn" onClick={handleShow}>
          <span>+ Add Employee</span>
        </Button>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div className="">
        <div className="cards_container">
          <div className="row">
            {mixed_Data.map((employee) => (
              <Employee key={employee.id} employee={employee} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title className="modal_title">Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AddForm />
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};

export default EmployeeList;
