import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [state, setState] = useState(600);

  useEffect(() => {
    const dec = () => setState(state - 1);
    const timer = () => setTimeout(dec, 1000);
    if (state === 0) return;
    timer();
    // eslint-disable-next-line consistent-return
    return clearTimeout(timer);
  }, [state]);

  const sec = state % 60 < 10 ? `0${state % 60}` : state % 60;
  const minute = Math.floor(state / 60);

  return (
    <div>
      <p>{`${minute}:${sec}`}</p>
    </div>
  );
};

export default Timer;
