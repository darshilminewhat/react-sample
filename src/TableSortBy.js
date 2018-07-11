import React, { Component } from 'react';

class TableSortBy extends Component{
    constructor(props) {
        super()
        var currentSortOrder = this.getCurrentSortOrder(props.sortBy, props.sortOrder, props.fieldName);
        this.state =  {
            currentSortOrder: currentSortOrder
        };
    }
    render() {
        var sortOrder = this.state.currentSortOrder;
        return (
            <div className="users-table-sort-buttons">
                <a onClick={this.props.onChangeSortBy.bind(null, this.props.fieldName, 'asc')}
                   className={"status-icon sort-up " + (sortOrder == 'asc' ? ' active' : '')}></a>
                <a onClick={this.props.onChangeSortBy.bind(null, this.props.fieldName, 'desc')}
                   className={"status-icon sort-down " + (sortOrder == 'desc' ? ' active' : '')}></a>
            </div>
        );
    }
    componentWillReceiveProps(nextProps) {
        var currentSortOrder = this.getCurrentSortOrder(nextProps.sortBy, nextProps.sortOrder, nextProps.fieldName);
        this.setState({currentSortOrder: currentSortOrder});
    }
    changeSortByState(sortBy, sortOrder) {
        var currentSortOrder = this.getCurrentSortOrder(sortBy, sortOrder, this.props.fieldName);
        this.setState({currentSortOrder: currentSortOrder});
    }
    getCurrentSortOrder(sortBy, sortOrder, fieldName) {
        if (sortBy == fieldName) {
            return sortOrder;
        }
        return null;
    }
}

export default TableSortBy;
