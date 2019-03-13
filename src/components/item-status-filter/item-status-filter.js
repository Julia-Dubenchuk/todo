import React, { Component } from 'react';

export default class ItemStatusFilter extends Component {

    render() {
        const { onClickFilter } = this.props;
        const classActive = "btn btn-info";
        return (
            <div className="btn-group col-6 px-lg-0">
                <button type="button" 
                className="btn btn-info"
                onClick={() => onClickFilter()}>All</button>
                <button type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => onClickFilter('important')}>Active</button>
                <button type="button" 
                    className="btn btn-outline-secondary"
                    onClick={() => onClickFilter('done')}>Done</button>
            </div>
        )
    }
}