import { useEffect, useState } from "react";
import Panel from "../generic/Panel.js";
import Button from "../generic/Button.js";

const Stopwatch = () => {

    const [currentTime, setCurrentTime] = useState(0);
    const [state, setState] = useState({intervalID:0, status:'start'});
    let second = 0;

    const handleStart = () => {
        start();
        console.log('Start button hit!');
    }

    const handlePause = () =>{
        pause();
        console.log('Pause button hit');
    }

    const handleEnd = () => {
        end();
        console.log('End button hit.');
    }

    const sayHi = () => {
        //const date = new Date();
        //let curr = date.toLocaleTimeString();
        if(state.status !== 'paused'){
            second += 1;
            console.log('status:', state.status, 'current second:', second);
            setCurrentTime(second);
        }
    }

    const start = function () {
        const id = setInterval(sayHi, 1000); //1000 millisecond = 1 second
        setState(ev => ({
            status:'started',
            intervalID: id,
        }));
    }

    const pause = function (){
        setState(ev => ({
            ...ev,
            status:'paused',
        }));
    }

    const end = () => {
        clearInterval(state.intervalID);   
        setState(ev => ({
            status:'end',
            intervalID: 0,
        }));
    }


    return (
        <>
        <Panel className={"output-"+state.intervalID}> Second(s): {currentTime}</Panel>
        <Button className='btn-start' text="Start" onClick={handleStart} />
        <Button className='btn-pause' text="Pause" onClick={handlePause} />
        <Button className='btn-end' text='End' onClick={handleEnd}/></>
    );
};

export default Stopwatch;
