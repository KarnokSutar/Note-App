

function SearchBar(props) {
  return (
    <input
      ref={props.searchRef}
      type="search"
      onChange={(event) => {
        event.preventDefault()
        props.searchNotes(event.target.value)
      }}
      placeholder="Search for notes"
    />
  )
}
export default SearchBar;