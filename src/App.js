import { useState } from "react";
import DateButton from "./components/DateButton";
import SessionButton from "./components/SessionButton";
import SessionOrderForm from "./components/SessionOrderForm";
import { data } from "./data/data";

const DATEBUTTON_MAP = {
  "Today": "2023-10-24",
  "Tomorrow": "2023-10-25",
  "Thu Oct 26": "2023-10-26",
  "Fri Oct 27": "2023-10-27",
};
const DATEBUTTON_NAMES = Object.keys(DATEBUTTON_MAP);

function App() {
  const [sessionDay, setSessionDay] = useState("2023-10-24");
  const [sessionIndex, setSessionIndex] = useState(null);
  const sessions = data[sessionDay];

  function handleDateButtonChange(e) {
    setSessionDay(e.target.value);
    setSessionIndex(null);
  }

  function handleSessionButtonChange(e) {
    setSessionIndex(e.target.value);
  }

  const dateButtonList = DATEBUTTON_NAMES.map((name) => (
    <DateButton 
      key={name}
      id={name}
      name={name}
      value={DATEBUTTON_MAP[name]}
      onChange={handleDateButtonChange}
      checked={DATEBUTTON_MAP[name] == sessionDay}
    />
  ));

  const sessionButtonList = sessions.map((session, i) => (
    <SessionButton 
      key={i}
      id={i}
      sessionTime={session.session}
      sessionName={session.name}
      value={i}
      onChange={handleSessionButtonChange}
      checked={i == sessionIndex}
    />
  ))
  
  return (
    <div>
      <header>
        <h1>cinema schedule</h1>
      </header>

      <div className="days-container">
        {dateButtonList}
        <div className="datepicker-toggle">
            <img className="datepicker-toggle-button" src="https://xn--c1adbibb0aykc7n.xn--p1ai/ig2xx/images/calendar_icon_brown.svg" />
            <span className="datepicker-text">Choose date</span>
            <input type="date" className="datepicker-input" min="2023-10-17" max="2023-10-31" value={sessionDay} onChange={handleDateButtonChange} />
        </div> 
      </div>

      <h2>Sessions:</h2>
      <div className="day-sessions">
      {sessionButtonList}
      </div>
      {sessionIndex != null && <SessionOrderForm session={sessions[sessionIndex]}/>}
    </div>
  );
}

export default App;
