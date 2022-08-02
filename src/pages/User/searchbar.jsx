
function SearchBar({textcallback,text,searchcallback}) {

    function handleInput(e) {
        const text = e.target.value
        textcallback(text)
    }
    function handleSubmit(e) {
      e.preventDefault()
      searchcallback()
    }
    return (
      <form onSubmit={handleSubmit}>
        <input className = "searchbar"onChange={handleInput}
        type="text"
        placeholder="Find a Chef!"
        value={text}
        /> 
      </form>
    )
}

export default SearchBar