import { Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";
import axios from "axios";
const AddForm = () => {
  const { addEmployee } = useContext(EmployeeContext);

  const [newEmployee, setNewEmployee] = useState({
    fullname: "",
    dob: "",
    age: "",
    gender: "",
    address: "",
    designation: "",
    salary: "",
  });
  const postemployee = async () => {
    await axios
      .post(
        "http://192.168.0.236/i2eopenemr/interface/forms/customapi/test/service.php?servicename=postEmployee",
        newEmployee
      )
      .then();
  };
  const [validated, setValidated] = useState(false);

  const { fullname, dob, age, gender, address, designation, salary } =
    newEmployee;

  const onInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const something = e.currentTarget;
    if (something.checkValidity() === true) {
      addEmployee(fullname, dob, age, gender, address, designation, salary);
    } else if (something.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
    }
    postemployee();
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group controlId="validationCustom01">
            <Form.Label>
              Full Name<sup>*</sup>
            </Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => onInputChange(e)}
                autoComplete="off"
                placeholder="enter full name"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please Enter Full Name !
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>
              DOB<sup>*</sup>
            </Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={dob}
              placeholder="select date of birth"
              onChange={(e) => onInputChange(e)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Select Date of Birth !
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>
              Age<sup>*</sup>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="enter your age"
              name="age"
              value={age}
              onChange={(e) => onInputChange(e)}
              required
            />
            {/* disabled rakhna padega */}
            <Form.Control.Feedback type="invalid">
              Please Enter Age !
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>
              Gender<sup>*</sup>
            </Form.Label>
            <br />
            <Form.Check
              id="male"
              value={gender}
              type="radio"
              label="Male"
              name="gender"
              inline={true}
              onChange={(e) => onInputChange(e)}
              required
            />

            <Form.Check
              id="female"
              value={gender}
              type="radio"
              label="Female"
              name="gender"
              inline={true}
              onChange={(e) => onInputChange(e)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please select your gender !
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <br />
      <Form.Group>
        <Form.Label>
          Address<sup>*</sup>
        </Form.Label>
        <Form.Control
          as="textarea"
          placeholder="enter your full address"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => onInputChange(e)}
          required
          minLength="16"
          maxLength="35"
        />
        <Form.Control.Feedback type="invalid">
          Please Enter Full Address !
        </Form.Control.Feedback>
      </Form.Group>
      <br />
      <Row>
        <Col>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>
              Designation<sup>*</sup>
            </Form.Label>
            <select
              name="designation"
              value={designation}
              defaultValue="Choose..."
              onChange={(e) => onInputChange(e)}
              required
            >
              <option value="">Select</option>
              <option value="Software Developer">Software Developer</option>
              <option value="DevOps Architect">DevOps Architect</option>
              <option value="Cloud Engineer">Cloud Engineer</option>
            </select>
            <Form.Control.Feedback type="invalid">
              Please select your designation !
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>
              Salary<sup>*</sup>
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Salary"
              name="salary"
              value={salary}
              onChange={(e) => onInputChange(e)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please Enter salary amount !
            </Form.Control.Feedback>
          </Form.Group>
        </Col>
      </Row>
      <br />
      <Row>
        <Col md={10}></Col>
        <Col>
          <Button variant="dark" type="submit">
            Add Employee
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
export default AddForm;
