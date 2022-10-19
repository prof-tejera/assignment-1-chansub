import { useEffect, useState} from "react";
import Panel from "../generic/Panel.js";
import Button from "../generic/Button.js";
import { doConvert } from "../../utils/helpers";

//I took some inspiration from https://stackoverflow.com/questions/61923862/how-to-pause-a-setinterval-countdown-timer-in-react

const Countdown = () => {

    const initialSeconds = 150;

    const [seconds, setSeconds] = useState(initialSeconds);
    const [pause, setPause] = useState(true);
    
    useEffect(() => {
        const interval = setInterval(performCount, 1000); //1000 millisecond = 1 second
        return () => {
            clearInterval(interval);
        }
    });

    

    const performCount = () => {
        if(!pause){
            if(seconds > 0){
                setSeconds(seconds - 1);
                //console.log('running now...', doConvert(seconds));
            }
        }
    }

    const handlePauseToggle = () => {
        setPause(!pause);
        console.log("Countdown",(pause)?'unpaused':'paused');
    }
    const handleEnd = () => {
        setPause(true);
        setSeconds(0);
        console.log("Countdown end called");
    }
    const handleReset = () => {
        setPause(true);
        setSeconds(initialSeconds);
        console.log("Countdown reset called");
    }

    



    return (
        <>
        <Panel className={"output"} data-seconds={seconds}>{doConvert(seconds)}</Panel>
        <Button className={(pause)?'btn-start':'btn-pause'} text={(pause)?'Start':'Pause'} onClick={handlePauseToggle} disabled={(seconds === 0)? true:false}/>
        <Button className='btn-end' text='End' onClick={handleEnd} disabled={(seconds === 0)? true:false}/> 
        <Button className='btn-reset' text='Reset' onClick={handleReset} />
        </>        
    );
};

export default Countdown;
