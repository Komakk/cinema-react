import { useState } from "react";
import Seat from "./Seat";

export default function SessionOrderForm({ session }) {
    const [seats, setSeats] = useState(session.seats);

    const sessionDateString = new Date(session.date).toDateString().slice(0, 10);
    const sessionDateTime = `${sessionDateString} ${session.session}`;
    const seatList = seats.map((seat, i) => (
        <Seat 
          key={i}
          number={i}
          status={seat}
          onClick={handleSeatClick} />
    ));

    function handleSeatClick(seatNumber) {
        const newSeats = [...seats];
        newSeats[seatNumber] = newSeats[seatNumber] !== 2 ? 2 : 0;
        setSeats(newSeats);
    }

    return (
        <div className="session-order-form">
        <div className="session-info-container">
            <p>Name: <span className="session-info">{session.name}</span></p>
            <p>Date: <span className="session-info">{sessionDateTime}</span></p>
        </div>
        <p>Seats: </p>
        <div className="legend">
            <div className="legend-item">
                <div className="legend-seat free"></div>
                <span>Free</span>
            </div>
            <div className="legend-item">
                <div className="legend-seat occupaied"></div>
                <span>Occupaied</span>
            </div>
        </div> 
        <div className="seats">
            {seatList}
        </div>
        <p className="seat-count">Your reserved seat: <span id="reserved-seat"></span></p>
        <button className="btn-buy">Select seats</button>
      </div>
    );
}