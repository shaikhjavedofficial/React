import { Form, Button, Row, Col } from "react-bootstrap";

import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState, useEffect } from "react";

const EditForm = ({ theEmployee }) => {
  const id = theEmployee.id;

  const [fullname, setFullName] = useState(theEmployee.fullname);
  const [dob, setDob] = useState(theEmployee.dob);
  const [age, setAge] = useState(theEmployee.age);
  const [gender, setGender] = useState(theEmployee.gender);
  // const [genderMale, setGenderMale] = useState(false);
  // const [genderFemale, setGenderFemale] = useState(false);
  const [address, setAddress] = useState(theEmployee.address);
  const [designation, setDesignation] = useState(theEmployee.designation);
  const [salary, setSalary] = useState(theEmployee.salary);

  const { updateEmployee } = useContext(EmployeeContext);

  const updatedEmployee = {
    id,
    fullname,
    dob,
    age,
    gender,
    address,
    designation,
    salary,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee);
  };

  // useEffect(() => {
  //   console.log("Gender==>", gender);
  //   gender === "male" ? setGenderMale(true) : setGenderMale(false);
  //   gender === "female" ? setGenderFemale(true) : setGenderFemale(false);
  // }, [gender]);

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>
              Full Name<sup>*</sup>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="enter full name"
              name="fullname"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
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
              placeholder="Date of Birth"
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
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
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>
              Gender<sup>*</sup>
            </Form.Label>
            <br />
            <Form.Check
              // id="male"
              value={gender}
              // checked={true}
              type="radio"
              label="Male"
              name="gender"
              inline={true}
              onChange={(e) => setGender(e.target.value)}
              required
            />

            <Form.Check
              // id="female"
              value={gender}
              // checked={true}
              type="radio"
              label="Female"
              name="gender"
              inline={true}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Label>
          Address<sup>*</sup>
        </Form.Label>
        <Form.Control
          as="textarea"
          placeholder="Address *"
          rows={3}
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>
              Designation<sup>*</sup>
            </Form.Label>
            <select
              name="designation"
              value={designation}
              defaultValue="Choose..."
              onChange={(e) => setDesignation(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Software Developer">Software Developer</option>
              <option value="DevOps Architect">DevOps Architect</option>
              <option value="Cloud Engineer">Cloud Developer</option>
            </select>
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
              onChange={(e) => setSalary(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col></Col>
        <Col>
          <Button variant="success" type="submit">
            Update Employee
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default EditForm;
