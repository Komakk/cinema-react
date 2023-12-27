export default function DateButton( {id, name, value, onChange, checked} ) {
    return (
        <>
          <input type="radio" id={id} name="days" value={value} onChange={onChange} checked={checked} />
          <label htmlFor={id}>{name}</label>
        </>
    )
}