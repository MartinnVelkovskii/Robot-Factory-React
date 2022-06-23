import React, { useState, useEffect } from "react";
import "../App.css";
import Robot from "../Classes/Robot";
import Paragraph from "./paragraph-component";

interface RobotProps {
  robots: Robot[];
}

function RobotComponent({ robots }: RobotProps, robot: Robot) {
  
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeRobot = robots[activeIndex]

  useEffect(() => {
    const currentIndex = robots.length - 1;

    setActiveIndex(currentIndex);
  }, [robots]);

  function onPrevious() {
    if (activeIndex - 1 < 0) {
      setActiveIndex(robots.length -1);
    } else {
      setActiveIndex(activeIndex - 1);

    }
  }

  function onNext() {
    if (activeIndex + 1 > robots.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);

    }
  }

  function canTalk(talkOptionClicked: boolean, isPhraseEmpty: string): boolean {
    return talkOptionClicked && isPhraseEmpty !== "";
  }
  console.log(robots);

  return (
    <>
      <section id="slide-1" className="factory-section">
        <div className="robot-title-box">
          <div className="robot-title-heading">
            <h2>{activeRobot.type} Robot</h2>
          </div>
          <div className="triangle">
            <div className="triangle-empty"></div>
          </div>
        </div>
        <div className="content-wrapper">
          <div className="left-side">
            <div className="robot">
              <div className="robot-head">
                <div
                  className={
                    canTalk(activeRobot.option2, activeRobot.phrase)
                      ? "speech bubble bubble-position"
                      : "d-none"
                  }
                >
                  {activeRobot.phrase}{" "}
                </div>
                <div className="left-eye"></div>
                <div
                  className={`right-eye ${
                    activeRobot.option3 === true ? "blink" : ""
                  }`}
                ></div>
                <div
                  className={`mouth ${
                    canTalk(activeRobot.option2, activeRobot.phrase)
                      ? "talk"
                      : ""
                  }`}
                ></div>
              </div>
              <div className="md-parts">
                <div className="arms arm1"></div>
                <div
                  style={{ color: activeRobot.color }}
                  className={
                    activeRobot.type === "Male"
                      ? "male-robot-body"
                      : "female-robot-body"
                  }
                ></div>
                <div className="arms arm2"></div>
              </div>
              <div className="down-parts">
                <div
                  className={`legs ${
                    activeRobot.option1 === true ? "jump " : ""
                  }`}
                ></div>
                <div
                  className={`legs ${
                    activeRobot.option1 === true ? "jump " : ""
                  }`}
                ></div>
              </div>
            </div>
            <div className="robot-name">{activeRobot.name}</div>
          </div>
          <div className="right-side">
            <Paragraph />
          </div>
        </div>
      </section>
      <div className="buttons-holder">
        <button className="gallery-btn" onClick={() => onPrevious()}>
          Previous
        </button>
        <button className="gallery-btn" onClick={() => onNext()}>
          Next
        </button>
      </div>
    </>
  );
}

export default RobotComponent;
