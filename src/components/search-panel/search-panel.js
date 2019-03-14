import React, {Component} from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {

    state = {
        term: ''
    }

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onSearchChange(term);
    };
    
    render() {
        const searchText = 'Type here to search';
        return (
            <div className="col-6 px-0">
                <input
                    type="search"
                    placeholder={searchText}
                    value = {this.state.term}
                    className="rounded-lg w-100 h-100 px-2"
                    onChange={this.onSearchChange}
                />
            </div>
        );
    }
};