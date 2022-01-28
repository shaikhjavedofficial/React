import { Row, Col, Card, Form, Image, Container } from "react-bootstrap";
// import { SetNForm } from "./New/Nform";
// import { SetForm } from "./Form/Form";
// import { ToggleComps } from "./toggle/ToggleComps";
import React, { Fragment, useState } from "react";
// import { Emi } from "./EMI/Emi";
// import { Prac1 } from "./Redux/prac1";
// import { TabsManager } from "./TabsManager";
// import { ParentPiano } from "./Music/ParentPiano";
// import { PracParent } from "./prac/PracParent";
// import { Calc } from "./P/Calc";
// import { Landing } from "./Routes/Landing";
// import { EmpParent } from "./search/EmpParent";
// import { DynamicComp } from "./dynamic/DynamicComp";
// import { Date } from "./Date/Date";
// import { API } from "./API";
// import { Landing } from "./Dict/Landing";
import { Login } from "./Login/Login";

export const Home = () => {
  // const [switch1, setSwitch1] = useState("son");
  // const [Discount, setDiscount] = useState(0);
  return (
    <React.Fragment>
      {/* <EmpParent /> */}
      {/* <DynamicComp /> */}
      {/* <Prac1 /> */}
      <Login />
      {/* <API /> */}
      {/* <Date /> */}
      {/* <Calc /> */}
      {/* <Landing /> */}
      {/* <TabsManager /> */}
      {/* <Form.Control onChange={(e) => setDiscount(e.target.value)} />
      <Emi Discount={Discount} /> */}
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
      {/* export default useMemo(APPNAME) to apply on */}
    </React.Fragment>
  );
};
