import DateButton from "./components/DateButton";
import SessionButton from "./components/SessionButton";

const sessions = [
  {'name': 'Valkiria', 'session': '10:00', 'seats': [0,0,0,0,1,1,1,0,0,0]},
  {'name': 'Love', 'session': '12:00', 'seats': [0,1,0,1,1,1,1,0,0,0]},
  {'name': 'Shame', 'session': '14:00', 'seats': [0,1,0,1,1,1,1,1,0,0]},
  {'name': 'Mission Imposible', 'session': '16:00', 'seats': [0,1,0,1,1,1,1,0,0,0]},
  {'name': 'Shrek', 'session': '18:00', 'seats': [0,1,0,1,1,1,1,1,0,0]},
  {'name': 'Iron Man', 'session': '20:00', 'seats': [0,1,1,1,1,1,1,1,1,0]}
];
const DATEBUTTON_MAP = {
  "Today": "2023-10-24",
  "Tomorrow": "2023-10-25",
  "Thu Oct 26": "2023-10-26",
  "Fri Oct 27": "2023-10-27",
};
const DATEBUTTON_NAMES = Object.keys(DATEBUTTON_MAP);

function App() {
  const dateButtonList = DATEBUTTON_NAMES.map((name) => (
    <DateButton 
      key={name}
      id={name}
      name={name}
      value={DATEBUTTON_MAP[name]}
    />
  ));

  const sessionButtonList = sessions.map((session, i) => (
    <SessionButton 
      key={i}
      id={i}
      sessionTime={session.session}
      sessionName={session.name}
    />
  ))
  
  return (
    <>
      <header>
        <h1>cinema schedule</h1>
      </header>

      <div className="days-container">
        {dateButtonList}
        <div className="datepicker-toggle">
            <img className="datepicker-toggle-button" src="https://xn--c1adbibb0aykc7n.xn--p1ai/ig2xx/images/calendar_icon_brown.svg" />
            <span className="datepicker-text">Choose date</span>
            <input type="date" class="datepicker-input" value="2023-10-24" min="2023-10-17" max="2023-10-31" />
        </div> 
      </div>

      <h2>Sessions:</h2>
      <div className="day-sessions">
      {sessionButtonList}
      </div>

      <div className="current-session">
        <div className="session-info-container">
            <p>Name: <span class="session-info"></span></p>
            <p>Date: <span class="session-info"></span></p>
        </div>
        <p>Seats: </p>
        <div class="legend">
            <div class="legend-item">
                <div class="legend-seat free"></div>
                <span>Free</span>
            </div>
            <div class="legend-item">
                <div class="legend-seat occupaied"></div>
                <span>Occupaied</span>
            </div>
        </div> 
        <div class="seats">
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
            <div class="seat"></div>
        </div>
        <p class="seat-count">Your reserved seat: <span id="reserved-seat"></span></p>
        <button class="btn-buy">Select seats</button>
      </div>
    </>
  );
}

export default App;
