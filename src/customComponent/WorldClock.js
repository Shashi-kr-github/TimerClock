import React, { useState, useEffect } from 'react';
import './WorldClock.css'

const WorldClock = () => {
  const [timezone, setTimezone] = useState('America/Los_Angeles'); // Default to PST timezone
  const [currentTime, setCurrentTime] = useState('');

  const handleTimezoneChange = (event) => {
    setTimezone(event.target.value);
  };

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch(`http://worldtimeapi.org/api/timezone/${timezone}`);
        const data = await response.json();
        setCurrentTime(data.datetime);
      } catch (error) {
        console.error('Error fetching current time:', error);
      }
    };

    fetchCurrentTime();

    const interval = setInterval(fetchCurrentTime, 1000); // Update time every second

    return () => {
      clearInterval(interval);
    };
  }, [timezone]);

  return (
    <div>
      <h1>World Clock</h1>
      <select  className = 'optionDropDown'value={timezone} onChange={handleTimezoneChange}>
        <option value="America/Los_Angeles">PST (Pacific Standard Time)</option>
        <option value="Asia/Kolkata">IST (Indian Standard Time)</option>
      </select>
      <h2>Current Time: {currentTime}</h2>
    </div>
  );
}

export default WorldClock;