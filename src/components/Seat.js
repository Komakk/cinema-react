export default function Seat( {number, status, onClick} ) {
    let seatStyle = "seat";
    switch (status) {
        case 1:
            seatStyle += " occupaied-seat";
            break;
        case 2:
            seatStyle += " picked-seat";
            break;
    }
    return (
        <div className={seatStyle} onClick={() => onClick(number)}></div>
    )
}