export default function SessionOrderForm({ session }) {
    return (
        <div className="session-order-form">
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
    );
}