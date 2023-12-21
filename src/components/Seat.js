export default function Seat( {status} ) {
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
        <div class={seatStyle}></div>
    )
}