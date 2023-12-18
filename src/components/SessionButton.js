export default function SessionButton( { id, sessionTime, sessionName } ) {
    return (
        <>
          <input type="radio" id={id} name="sessions" />
          <label className="session" htmlFor={id}>
            <span>{sessionTime}</span>
            <span>{sessionName}</span>
          </label>
        </>
    )
}