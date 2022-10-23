import { useEffect, useState} from "react";
import Panel from "../generic/Panel.js";
import Button from "../generic/Button.js";
import { doConvert } from "../../utils/helpers";


const XY = () => {

    const initialSeconds = 5;
    const initialRounds = 3;

    const [rounds, setRounds] = useState(initialRounds);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [pause, setPause] = useState(true);

    useEffect(() => {
        console.log("useEffect ran");
        const intervalId = setInterval(performCount, 1000);
    
        return () => {
          clearInterval(intervalId);
          console.log("interval cleared", intervalId);
        };
      });

    const performCount = () => {
        if (!pause) {
          if (seconds > 0) {
            setSeconds(seconds - 1);
            if (seconds === 1 && rounds > 1) {
              console.log("set counter now and reset seconds");
              setSeconds(initialSeconds);
              setRounds(rounds - 1);
            }
            console.log("running now...", seconds);
          } else if (rounds === 1 && seconds === 0) {
            console.log("END!");
            setRounds(0);
          }
        }
      };

    const handlePauseToggle = () => {
        setPause(!pause);
        console.log("Countdown",(pause)?'unpaused':'paused');
    }
    const handleEnd = () => {
        setPause(true);
        setSeconds(0);
        setRounds(0);
        console.log("XY end called");
    }
    const handleReset = () => {
        setPause(true);
        setSeconds(initialSeconds);
        setRounds(initialRounds);
        console.log("XY reset called");
    }


    return (
        <>
        <Panel className={"output"} data-seconds={seconds}>Rounds:{rounds} Time:{doConvert(seconds)}</Panel>
        <Button className={(pause)?'btn-start':'btn-pause'} img="start" text={(pause)?'Start':'Pause'} onClick={handlePauseToggle} disabled={(seconds === 0)? true:false}/>
        <Button className='btn-end' text='End' onClick={handleEnd} disabled={(rounds === 0)||(rounds === initialSeconds)? true:false}/> 
        <Button className='btn-reset' text='Reset' onClick={handleReset} />
        </>        
    );
};

export default XY;
