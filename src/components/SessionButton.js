export default function SessionButton( { id, sessionTime, sessionName, value, onChange, checked } ) {
    return (
        <>
          <input type="radio" id={id} name="sessions" value={value} onChange={onChange} checked={checked} />
          <label className="session" htmlFor={id}>
            <span>{sessionTime}</span>
            <span>{sessionName}</span>
          </label>
        </>
    )
}