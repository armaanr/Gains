import React, { useState } from 'react';

const TimeInterval = ({id}) => {
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  const onTimeChange = (setValue) => (e) => {
    const regex = /^[0-9]$|^[0-5][0-9]$/;
    const value = e.target.value;

    if( (value === '') || (value.match(regex))){
      setValue(value);
    }
  };

  return <div id={id} className="timeInterval">
    <input
      type="number"
      name="minutes"
      onChange={onTimeChange(setMinutes)}
      value={minutes || ''}
    /><p>m</p>

    <input
      type="number"
      name="seconds"
      onChange={onTimeChange(setSeconds)}
      value={seconds || ''}
    /><p>sec</p>
  </div>
};

export default TimeInterval;