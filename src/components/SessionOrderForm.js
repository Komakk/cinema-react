import Seat from "./Seat";

export default function SessionOrderForm({ session }) {
    const sessionDateString = new Date(session.date).toDateString().slice(0, 10);
    const sessionDateTime = `${sessionDateString} ${session.session}`;
    const seatList = session.seats.map(seat => (
        <Seat status={seat} />
    ));
    return (
        <div className="session-order-form">
        <div className="session-info-container">
            <p>Name: <span class="session-info">{session.name}</span></p>
            <p>Date: <span class="session-info">{sessionDateTime}</span></p>
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
            {seatList}
        </div>
        <p class="seat-count">Your reserved seat: <span id="reserved-seat"></span></p>
        <button class="btn-buy">Select seats</button>
      </div>
    );
}