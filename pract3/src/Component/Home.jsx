// import { Row, Col, Card, Form, Image, Container } from "react-bootstrap";
// import { SetNForm } from "./New/Nform";
// import { SetForm } from "./Form/Form";
// import { ToggleComps } from "./toggle/ToggleComps";
import { Emi } from "./EMI/Emi";
// import { TabsManager } from "./TabsManager";
// import { ParentPiano } from "./Music/ParentPiano";
// import { PracParent } from "./prac/PracParent";
// import { Calc } from "./P/Calc";
// import { Landing } from "./Routes/Landing";
// import { EmpParent } from "./search/EmpParent";
// import { Date } from "./Date/Date";
// import { API } from "./API";
// import { Landing } from "./Dict/Landing";
import { Login } from "./Login/Login";

export const Home = () => {
  // const [switch1, setSwitch1] = useState("son");
  return (
    <div>
      <Login />
      {/* <API /> */}
      {/* <Date /> */}
      {/* <Calc /> */}
      {/* <Landing /> */}
      {/* <TabsManager /> */}
      <Emi />
      {/* <PracParent /> */}
      {/* <ParentPiano /> */}
      {/* <Image
        src={`${switch1}.png`}
        alt=""
        height="30px"
        width="50px"
        onClick={() =>
          switch1 == "soff" ? setSwitch1("son") : setSwitch1("soff")
        }
      />
      {switch1 == "soff" ? <SetNForm /> : <SetForm />}
      <ToggleComps /> */}
    </div>
  );
};
