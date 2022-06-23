import React, { Component, useState } from "react";
import "./App.css";
import Head from "./components/head-component";
import Form from "./components/form-component";
import Robot from "./Classes/Robot";
import RobotComponent from "./components/robot-component";

function App() {
  const [robots, setRobots] = useState<Robot[]>([]);

  function addRobot(robot: Robot): void {
    const tempList = [...robots];
    tempList.push(robot);
    setRobots(tempList);
  }

  return (
    <div className="padding-5px">
      <Head />
      {robots.length != 0 && <RobotComponent robots = {robots} />}
      <Form setRobots={addRobot} />
    </div>
  );
}

export default App;
