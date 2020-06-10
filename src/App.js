import React from "react";
import "./styles.css";

import Badge from "./components/Badge/Badge";
export default function App() {
  return (
    <div className="App">
      <h1>Badge component</h1>
      <Badge>primary</Badge>
      <Badge color="info">info</Badge>
      <Badge color="warning">warning</Badge>
      <Badge color="danger">danger</Badge>
      <Badge color="error">error</Badge>
    </div>
  );
}
