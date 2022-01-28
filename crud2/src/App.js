import EmployeeList from "./components/EmployeeList";
import EmployeeContextProvider from "./contexts/EmployeeContext";

function App() {
  return (
    <div>
      <EmployeeContextProvider>
        <EmployeeList />
      </EmployeeContextProvider>
    </div>
  );
}

export default App;
