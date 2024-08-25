import React, { useEffect, useState } from "react";
import TimerComp from "./timer";
import MoodComp from "./mood";
import { colorContext } from "./testContext";
import TimeListComp from "./timeList";
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
      <colorContext.Provider value={{timeArr:timeArr , setTimeArr:setTimeArr}}>
        <div className="main">
          <MoodComp isDark={isDark} handleMood={handleMood} />
          <TimerComp
            isDark={isDark}
            
          />
          <TimeListComp></TimeListComp>
        </div>
        
      </colorContext.Provider>
    );
  } else {
    return (
      <colorContext.Provider value={{timeArr , setTimeArr}}>
        <div className="main main_dark">
          <MoodComp isDark={isDark} handleMood={handleMood} />
          <TimerComp
            isDark={isDark}
            timeArr={timeArr}
            setTimeArr={setTimeArr}
          />
          <TimeListComp></TimeListComp>
        </div>
        
      </colorContext.Provider>
    );
  }
};
export default AppComp;
