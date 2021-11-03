import React from "react";
import { Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TabsManager.css";
export const TabsManager = () => {
  return (
    <div>
      <Tabs
        defaultActiveKey="Sec-1"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Sec-1" title="Section I">
          Tab1
        </Tab>
        <Tab eventKey="Sec-2" title="Section II">
          Tab2
        </Tab>
        <Tab eventKey="Sec-3" title="Section III">
          Tab3
        </Tab>
      </Tabs>
    </div>
  );
};
