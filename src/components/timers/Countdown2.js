import {useState} from "react";
import Panel from "../generic/Panel.js";
import Button from "../generic/Button.js";

//I took some inspiration from https://stackoverflow.com/questions/61923862/how-to-pause-a-setinterval-countdown-timer-in-react

const Countdown2 = () => {

    let [secondsLeft, setSecondsLeft] = useState(60);
    let [elapsed, setElapsed] = useState(60);
    const [pause, setPause] = useState(false);

    const start = () => {
        // setInterval for every second
        let countdown = setInterval(() => {
          // if allowed time is used up, clear interval
          if (secondsLeft < 0) {
            clearInterval(countdown)
            return;
          }
          // if paused, record elapsed time and return
          if (pause === true) {
            //elapsed = secondsLeft;
            setElapsed(secondsLeft);
            return;
          }
          // decrement seconds left
          //secondsLeft--;
          //displayTimeLeft(secondsLeft)
          setSecondsLeft(secondsLeft--);
        }, 1000)
      }

      const handlePauseToggle = () => {
        setPause(!pause);
        console.log("SecondsLeft", secondsLeft, "Countdown",(pause)?'unpaused':'paused');
        if(pause === false){
            setSecondsLeft(elapsed);
        }
        if(secondsLeft === 60){
            start();
            console.log("starting!");
        }
    }
    

    //   const displayTimeLeft = (seconds) => {
    //     document.getElementById("time").textContent = seconds;
    //   }
    



    return (
        <>
        <Panel className={"output"}>Seconds: {secondsLeft}</Panel>
        
        <Button className={(pause)?'btn-start':'btn-pause'} text={(pause)?'Start':'Pause'} onClick={handlePauseToggle} disabled={(secondsLeft === 0)? true:false}/>
        {/* <Button className='btn-end' text='End' onClick={handleEnd} disabled={(seconds === 0)? true:false}/> 
        <Button className='btn-reset' text='Reset' onClick={handleReset} /> */}
        </>        
    );
};

export default Countdown2;
