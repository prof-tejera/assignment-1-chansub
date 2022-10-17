import { useEffect, useState } from "react";


const Countdown = () => {


    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(180);
    const [currentTime, setCurrentTime] = useState(0);

    const sayHi = () => {
        const date = new Date();
        let curr = date.toLocaleTimeString();
        console.log('current time', curr);
        setCurrentTime(curr);
    }

    const start = () => {
        setInterval(sayHi, 1000);
    }
    const end = () => {
        clearInterval(start);   
    }


    return (
        <><div>Current count: {currentTime}</div></>
    );
};

export default Countdown;
