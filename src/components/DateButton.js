export default function DateButton( {id, name, value} ) {
    return (
        <>
          <input type="radio" id={id} name="days" value={value}  />
          <label htmlFor={id}>{name}</label>
        </>
    )
}