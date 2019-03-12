import React from 'react';
import './search-panel.css';

const SearchPanel = () => {
    const searchText = 'Type here to search';
    const searchStyle = {
        fontSize: '20px'
    };
    return <div className="col-6 px-0">
        <input 
            style={searchStyle}
            placeholder={searchText}
            className="rounded-lg w-100 h-100 px-lg-2" />
        </div>
};

export default SearchPanel;