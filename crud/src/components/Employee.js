import { useContext, useState, useEffect } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Modal, Button } from "react-bootstrap";
import EditForm from "./EditForm";
import Avatar from "react-avatar";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    handleClose();
  }, [employee]);

  return (
    <>
      <div className="card_main">
        <button
          onClick={() => deleteEmployee(employee.id)}
          className="btn text-danger"
          data-toggle="modal"
          style={{ float: "right" }}
        >
          <i className="material-icons">&#xE872;</i>
        </button>
        <div className="card_items">
          <div className="user_avatar">
            <Avatar
              className="user_avatar"
              name={employee.fullname}
              color="rgba(82, 100, 182, 0.918)"
              fgColor="white"
              textSizeRatio
              size={100}
              round={true}
            />
          </div>
          <strong>
            FullName:<span className="value_text">{employee.fullname}</span>
          </strong>
          <br />
          <strong>
            DOB:<span className="value_text">{employee.dob}</span>
          </strong>
          <br />
          <strong>
            Age:<span className="value_text">{employee.age}</span>
          </strong>
          <br />
          <strong>
            Gender:<span className="value_text">{employee.gender}</span>
          </strong>
          <br />
          <strong>
            Address:<span className="value_text">{employee.address}</span>
          </strong>
          <br />
          <strong>
            Designation:
            <span className="value_text">{employee.designation}</span>
          </strong>
          <br />
          <strong>
            Salary:<span className="value_text">{employee.salary} LPA</span>
          </strong>
          <br />
        </div>
        <div className="edit_btn_contain">
          <Button onClick={handleShow} id="edit_butt" data-toggle="modal">
            Edit Profile
          </Button>
        </div>
      </div>
      {/* //////////////// Edit Modal /////////////////// */}
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm theEmployee={employee} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Employee;
