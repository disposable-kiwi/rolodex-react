import {Component} from 'react';

const SearchBox = (props)=>{
    //we destructure our props as we have done before
    //we destructure this from our custom props from this place in our parent component of App:
    // <SearchBox className="search-box" placeholder='Search for Characters Here' handleClick={onSearchChange} />
    const {handleClick, placeholder, className} = props;

    return (
        <input className={className} type="search" placeholder={placeholder}
        onChange={handleClick}
      />
    );
}

export default SearchBox;