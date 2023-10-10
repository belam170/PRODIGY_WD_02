import React, { useEffect, useState } from 'react'

function Stopwatch() {
    const[time,setTime] = useState(0)
    const[isRunning,setIsRunning] = useState(false)

    useEffect(()=>{
        let interValid;
        // setting time from 0 to 1 every 10milliseconds using javascript setInterval method
        if(isRunning){
        interValid = setInterval(() => setTime(time + 1), 10)
        }
        // helps the timer to move to the next sequence eg millisecond to second to minutes
        return ()=> clearInterval(interValid)
    },[isRunning,time])

    // Hours calculations
    const hours = Math.floor(time / 360000);
    // minutes calculations
    const minutes = Math.floor(time % 360000 / 6000);
    // seconds calculations
    const seconds = Math.floor(time % 6000 / 100);
    // milliseconds calculations
    const milliseconds = time % 100;

    // starting/stopping a timer
    const timeCounter = () =>{
        setIsRunning(!isRunning);
    }
    // reseting a timer
    const timerReset = () =>{
        setTime(0);
    }
  return (
    <div className='container'> 
        <div className='stopwatch-time'>
            <p>{hours}:{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2,"0")}:{milliseconds.toString().padStart(2,"0")}</p>
            <div className='buttons'>
            <button className='button1' onClick={timeCounter}>
                {isRunning ? 'Stop' : 'Start'}
            </button>
            <button onClick={timerReset} className='button2'>
               Reset
            </button>
            </div>
        </div>
    </div>
  )
}

export default Stopwatch