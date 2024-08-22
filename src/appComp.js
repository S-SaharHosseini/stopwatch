import React, { useState } from "react";
import TimerComp from "./timer";
import MoodComp from "./mood";
const AppComp = () => {
  const [isDark, setMood] = useState(false);
  const handleMood = () => {
    setMood(!isDark);
  };
  if (!isDark) {
    return (
      <div className="main">
        <MoodComp isDark={isDark} handleMood={handleMood} />
        <TimerComp isDark={isDark} />
      </div>
    );
  } else {
    return (
      <div className="main main_dark">
        <MoodComp isDark={isDark} handleMood={handleMood} />
        <TimerComp isDark={isDark} />
      </div>
    );
  }
};
export default AppComp;
