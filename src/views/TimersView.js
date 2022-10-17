import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";
import Button from "../components/generic/Button";


const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  width: 120px;
  text-align: center;
`;

const TimerTitle = styled.div``;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch />, b:<Button text="start"/>, be:<Button text="end"/>},
    { title: "Countdown", C: <Countdown />, b:<Button text="start"/>, be:<Button text="end"/>}, 
    { title: "XY", C: <XY />, b:<Button text="start"/>, be:<Button text="end"/>},
    { title: "Tabata", C: <Tabata />, b:<Button text="start"/>, be:<Button text="end"/>},
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer key={`timer-${timer.title}`}>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
          {timer.b}
          {timer.be}
        </Timer>
      ))}
    </Timers>
  );
};

export default TimersView;
