import React, {useState} from "react";

function Search( {filterPlants}) {

  const [searchInput, setSearchInput] = useState("")

  function handleSearchInput(e) {
    e.preventDefault()
    setSearchInput(e.target.value)
    filterPlants(e.target.value)
    console.log(e.target.value)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchInput}
      />
    </div>
  );
}

export default Search;
