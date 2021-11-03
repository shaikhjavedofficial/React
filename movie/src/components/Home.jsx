import React from "react";
import { Movies } from "./Movies";
import { Card, Tab, Tabs } from "react-bootstrap";
import { MovieList } from "./MovieList";

export const Home = () => {
  return (
    <Card>
      <Tabs
        defaultActiveKey="ml"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="ml" title="Movies List">
          <MovieList />
        </Tab>
        <Tab eventKey="AddM" title="Add Movie">
          <Movies />
        </Tab>
      </Tabs>
    </Card>
  );
};
