"use client";

import { useEffect, useState } from 'react';

const Loader = () => {
  const [countdown, setCountdown] = useState(100);
  const [active, setActive] = useState(true);

  useEffect(() => {
    let timer: number | undefined;
    if (countdown > 0) {
      timer = window.setTimeout(() => setCountdown(countdown - 1), 20); // Adjust the duration to make the countdown faster
    } else {
      setActive(false);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className={`loader ${!active ? 'loader--hidden' : ''}`}>
      <div className="loader__countdown font-['Bebas_Neue']">
        {countdown}%
      </div>
    </div>
  );
};

export default Loader;
