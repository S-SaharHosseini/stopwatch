import React, { useEffect, useState } from "react";
import TimerComp from "./timer";
import MoodComp from "./mood";
const AppComp = () => {
  const [isDark, setMood] = useState(false);
  const handleMood = () => {
    setMood(!isDark);
  };
  const [timeArr, setTimeArr] = useState([]);

  // _______lifecycle components
  // useEffect(() => {
  //   console.log("useEffect");
  //   return () => {};
  // }, [isDark]);

  if (!isDark) {
    return (
      <div className="main">
        <MoodComp isDark={isDark} handleMood={handleMood} />
        <TimerComp isDark={isDark} timeArr={timeArr} setTimeArr={setTimeArr} />
      </div>
    );
  } else {
    return (
      <div className="main main_dark">
        <MoodComp isDark={isDark} handleMood={handleMood} />
        <TimerComp isDark={isDark} timeArr={timeArr} setTimeArr={setTimeArr} />
      </div>
    );
  }
};
export default AppComp;
