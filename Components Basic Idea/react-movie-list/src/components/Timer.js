import { useState } from 'react';

const Timer = (props) => {
  const [seconds, setSeconds] = useState(props.start);

  setTimeout(() => {
    setSeconds((oldSeconds) => oldSeconds + 1);
  }, 1000);

  return (
    <div>
      <h2>Timer</h2>
      Time : {seconds}s
    </div>
  );
};

export default Timer;