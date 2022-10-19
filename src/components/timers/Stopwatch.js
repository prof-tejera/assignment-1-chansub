import { useEffect, useState} from "react";
import Panel from "../generic/Panel.js";
import Button from "../generic/Button.js";
import { doConvert } from "../../utils/helpers";

//I took some inspiration from https://stackoverflow.com/questions/61923862/how-to-pause-a-setinterval-countdown-timer-in-react

const StopWatch = () => {

    const initialSeconds = 0;
    const maxSeconds = 150;

    const [seconds, setSeconds] = useState(initialSeconds);
    const [pause, setPause] = useState(true);
    
    useEffect(() => {
        const interval = setInterval(performCount, 1000); 
        return () => {
            clearInterval(interval);
        }
    });

    const performCount = () => {
        if(!pause){
            if(seconds < maxSeconds){
                setSeconds(seconds + 1);
                console.log('running now...', seconds);
            }
        }
    }

    const handlePauseToggle = () => {
        setPause(!pause);
        console.log("Stopwatch",(pause)?'unpaused':'paused');
    }
    const handleEnd = () => {
        setPause(true);
        setSeconds(10);
        console.log("Stopwatch end called");
    }
    const handleReset = () => {
        setPause(true);
        setSeconds(initialSeconds);
        console.log("Stopwatch reset called");
    }


    return (
        <>
        <Panel className={"output"}>{doConvert(seconds)}</Panel>
        <Button className={(pause)?'btn-start':'btn-pause'} text={(pause)?'Start':'Pause'} onClick={handlePauseToggle} disabled={(seconds > 0) || (seconds < 10) ? false:true}/>
        <Button className='btn-end' text='End' onClick={handleEnd} disabled={(seconds === 0)? true:false}/> 
        <Button className='btn-reset' text='Reset' onClick={handleReset} />
        </>        
    );
};

export default StopWatch;
