import React, { useState, useEffect } from 'react';
import "./StopWatch.css"


const StopWatch = () => {

    const [timers, setTimers] = useState([]);
  const [timerName, setTimerName] = useState('');
  const [countdowns, setCountdowns] = useState([]);

  const handleTimerNameChange = (event) => {
   // console.log(event, "=============>>>>>>", event.target.value);
    setTimerName(event.target.value);
  };

  const handleStartTimer = () => {
    if (timerName.trim() === '') {
    //  console.log("[][]==========>>>",timerName.trim())
      return;
    }

    const countdown = {
      name: timerName,
      time: 60, 
      id: Date.now(),
    };

    setCountdowns((prevCountdowns) => [...prevCountdowns, countdown]);
    setTimerName('');
  };

  const handleRemoveTimer = (id) => {
    setCountdowns((prevCountdowns) =>
      prevCountdowns.filter((countdown) => countdown.id !== id)
    );
  };

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setCountdowns((prevCountdowns) =>
        prevCountdowns.map((countdown) => {
          if (countdown.time > 0) {
            return {
              ...countdown,
              time: countdown.time - 1,
            };
          }
          return countdown;
        })
      );
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div id="timers">
        {countdowns.map((countdown) => (
          <div key={countdown.id}>
            <p>
              {countdown.name}: {countdown.time}s
            </p>
            <button className= 'removeButton'onClick={() => handleRemoveTimer(countdown.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <h2>Add Timer</h2>
      <input className='inputTimer'
        type="text"
        value={timerName}
        onChange={handleTimerNameChange}
        placeholder="Timer Name"
      />
      <button className='StartButton' onClick={handleStartTimer}>Start</button>
    </div>
  );
}

export default StopWatch