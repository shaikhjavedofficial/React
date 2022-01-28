import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { defaultData } from "../components/Json/db";
import axios from "axios";
export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
  const [getData, setData] = useState([]);
  axios
    .get(
      "http://192.168.0.236/i2eopenemr/interface/forms/customapi/test/service.php?servicename=getEmployee"
    )
    .then((resp) => {
      setData(resp);
      console.log(resp);
    });

  const [employees, setEmployees] = useState([
    {
      id: uuidv4(),
      fullname: "",
      dob: "",
      age: "",
      gender: "",
      address: "",
      designation: "",
      salary: "",
    },
  ]);
  const [DefaultData, setDefaultData] = useState(defaultData.data);

  useEffect(() => {
    getData.data >= 1
      ? setEmployees(getData.data)
      : setEmployees(JSON.parse(localStorage.getItem("employees")));
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  });

  const sortedEmployees = employees.sort((a, b) => (a.name < b.name ? -1 : 1));

  const addEmployee = (
    fullname,
    dob,
    age,
    gender,
    address,
    designation,
    salary
  ) => {
    setEmployees([
      ...employees,
      {
        id: uuidv4(),
        fullname,
        dob,
        age,
        gender,
        address,
        designation,
        salary,
      },
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees(employees.filter((employee) => employee.id !== id));
    setDefaultData(DefaultData.filter((data) => data.id !== id));
    axios.delete(
      "http://192.168.0.236/i2eopenemr/interface/forms/customapi/test/service.php?servicename=deleteEmployee",
      {
        id: id,
      }
    );
  };

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(
      employees.map((employee) =>
        employee.id === id ? updatedEmployee : employee
      )
    );
    setDefaultData(
      DefaultData.map((data) => (data.id === id ? updatedEmployee : data))
    );
    employees.map((employee) =>
      employee.id === id
        ? axios
            .put(
              "http://192.168.0.236/i2eopenemr/interface/forms/customapi/test/service.php?servicename=updateEmployee",
              updateEmployee
            )
            .then((resp) => console.log(resp))
        : employee
    );
  };

  return (
    <EmployeeContext.Provider
      value={{
        addEmployee,
        DefaultData,
        sortedEmployees,
        deleteEmployee,
        updateEmployee,
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeContextProvider;
