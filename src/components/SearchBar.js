import React from 'react';


function SearchBar(props){

    const setSearchString = props.useSearchString.setSearchString;

    return(
        <input inputMode="text"  onChange={()=>{setSearchString(document.querySelector('input').value);} } className="mainInput" type="text" placeholder="Start Typing to Filter Emojis!"></input>
        
    )
}

export default SearchBar;