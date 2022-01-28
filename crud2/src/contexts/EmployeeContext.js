import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { defaultData } from "../components/Json/db";

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {
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
    setEmployees(JSON.parse(localStorage.getItem("employees")));
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
