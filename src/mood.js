const MoodComp = (props) => {
  const isDark = props.isDark;
  if (!isDark) {
    return (
      <div className="mood" onClick={props.handleMood}>
        <i className="fi fi-sr-moon"></i>
      </div>
    );
  } else {
    return (
      <div className="mood" onClick={props.handleMood}>
        <i className="fi fi-sr-sun"></i>
      </div>
    );
  }
};

export default MoodComp;
