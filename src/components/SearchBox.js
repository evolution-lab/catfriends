import React from 'react';

import './SearchBox.css';

const SearchBox = ({onChange}) => {
    return (
        <div className="SearchBox">
            <input type="search" className="SearchBox-input" placeholder="Search cats..." onChange={onChange} />
        </div>
    )
};

export default SearchBox;