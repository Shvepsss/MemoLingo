import React from 'react';

export const useTimer = () => {
  const [secondsElapsed, setSecondsElapsed] = React.useState<number>(0);
  const [timerRunning, setTimerRunning] = React.useState<boolean>(false);
  React.useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    if (timerRunning) {
      intervalId = setInterval(() => {
        setSecondsElapsed(prevSeconds => prevSeconds + 1);
      }, 1000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [timerRunning]);
  const startTimer = () => {
    setTimerRunning(true);
  };

  const stopTimer = () => {
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setSecondsElapsed(0);
  };

  const formattedTime = () => {
    const minutes = Math.floor(secondsElapsed / 60);
    const seconds = secondsElapsed % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return {
    secondsElapsed,
    timerRunning,
    startTimer,
    stopTimer,
    resetTimer,
    formattedTime,
  };
};
