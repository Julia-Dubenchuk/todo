import React from 'react';
import './search-panel.css';

const SearchPanel = (props) => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    console.log(props);
    return <div className="col-6 px-0">
        <input
            type="search"
            style={searchStyle}
            placeholder={searchText}
            className="rounded-lg w-100 h-100 px-lg-2"
            onChange={(event) => props.onChangeSearch(event.target.value)}
         />
        </div>
};

export default SearchPanel;