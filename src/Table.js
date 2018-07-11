import React, { Component } from 'react';
import './App.css';
import FixedTableWrap from './FixedDataTable';
import Helpers from './Helpers';
import { storiesOf } from '@storybook/react';
import sampleFields from './sampleFields';
import _ from 'underscore';
import TableSortBy from './TableSortBy';

var ReactBootstrap = require('react-bootstrap');
// var Modal = ReactBootstrap.Modal;
var OverlayTrigger = ReactBootstrap.OverlayTrigger;
var Popover = ReactBootstrap.Popover;
var MenuItem = ReactBootstrap.MenuItem;

storiesOf('Fixed Data Table', module)
    .add('Table with fixed width of columns', () => (
        <div className="App-content">
            <Table data={sampleFields.data} fields={sampleFields.set2} />
        </div>
    ))
    .add('Table with fixed columns', () => (
        <div className="App-content">
            <Table data={sampleFields.data} fields={sampleFields.set3} />
        </div>
    ))
    .add('Table with sorting options', () => (
        <div className="App-content">
            <Table data={sampleFields.data} fields={sampleFields.set4} sortBy={"name"} sortOrder={"desc"} />
        </div>
    ));

class Table extends Component {
    constructor(props) {
        super()
        this.state = {
            sortByMulti: props.sortBy,
            onSort: props.onSort || this.onSort
        }
        this.cellMethod = this.cellMethod.bind(this)
        this.headerMethod = this.headerMethod.bind(this)
    }
    render() {
        var tableProps = {
            ref: "dataTable",
            rowHeight: this.props.rowHeight || 103,
            rowsCount: this.props.data.length || 1,
            maxHeight: 100000,
            headerHeight: 38
        };
        return (
            <div className="users-content-table automate-table mt-0">
                <FixedTableWrap
                    fields={this.props.fields}
                    headerMethod={this.headerMethod}
                    cellMethod={this.cellMethod}
                    tableProps={tableProps}
                />
            </div>
        );
    }
    onSort(sortBy, sortOrder){
        this.sortItems(sortBy, sortOrder, this.props.data);
    }
    sortItems(sortBy, sortOrder, data){
        data = data || this.state.data
        if (sortBy) {
            data.sort(function (item1, item2) {
                sortOrder = sortOrder || 'desc';
                var value1 = item1[sortBy] || 0;
                var value2 = item2[sortBy] || 0;
                if (sortBy == 'name') {
                    value1 = value1.toLowerCase();
                    value2 = value2.toLowerCase();
                    return value1 > value2 ? (sortOrder == 'desc' ? -1 : 1) : (sortOrder == 'desc' ? 1 : -1);
                }
                else if (sortBy == 'status') {
                    if (value1 && value2) {
                        if ((value1 === 'on' && value2 === 'on') || (value1 === 'off' && value2 === 'off'))
                            return 0;
                        else if (value1 === 'on' && value2 === 'off')
                            return sortOrder == 'desc' ? 1 : -1;
                        else
                            return sortOrder == 'desc' ? -1 : 1;
                    }
                    else {
                        if (!value1) {
                            return sortOrder == 'desc' ? -1 : 1;
                        }
                        else if (!value2) {
                            return sortOrder == 'desc' ? 1 : -1;
                        }
                    }
                }
                else {
                    value1 = parseInt(value1);
                    value2 = parseInt(value2);
                    return sortOrder == 'desc' ? value2 - value1 : value1 - value2;
                }
            }.bind(this));
        } else {
            data.sort(function (item1, item2) {
                var value1 = item1["status"] || "";
                var value2 = item2["status"] || "";
                value1 = value1.toLowerCase();
                value2 = value2.toLowerCase();
                if (value1 === "on" || value1 === "off") {
                    return -1;
                } else if (value2 === "on" || value2 === "off") {
                    return 1;
                } else {
                    return 0;
                }
            }.bind(this));
        }
        this.setState({sortBy: sortBy, sortOrder: sortOrder, data: data});
    }
    onSortClick(sortBy){
        this.state.onSort(sortBy);
        this.overlay.hide();
        this.setState({sortByMulti: sortBy})
    }
    headerMethod(options) {
        var fieldItem = this.props.fields[options.columnKey];
        var sortButtons;
        if (fieldItem.sort) {
            var fieldName = fieldItem.field;
            sortButtons = <TableSortBy
                fieldName={fieldName}
                sortBy={this.props.sortBy}
                sortOrder={this.props.sortOrder}
                onChangeSortBy={this.state.onSort}
            />;
        }
        if (fieldItem.sortOptions) {
            sortButtons = <TableSortBy
                fieldName={this.state.sortByMulti}
                sortBy={this.props.sortBy}
                sortOrder={this.props.sortOrder}
                onChangeSortBy={this.state.onSort}
            />;
            var sortOptions = fieldItem.sortOptions;
            var sortKeys = _.keys(sortOptions);
            return (
                <div className="users-table-cell-head space-between">
                    <span>{fieldItem.name}</span>
                    <OverlayTrigger
                        placement='bottom'
                        trigger={['click']}
                        rootClose={true}
                        ref={(x) => this.overlay = x}
                        container={this}
                        overlay={<Popover id={"sort-by-popover"}>
                            <div>
                                <div>
                                    <ul className="custom-dropdown-menu">
                                        {sortKeys.map(function (opt, i) {
                                            return <MenuItem key={i}>
                                                <p className="title"
                                                   onClick={this.onSortClick.bind(this, opt)}>{sortOptions[opt]}</p>
                                            </MenuItem>
                                        }.bind(this))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </Popover>}>
                        <span
                            className="sortby-items">By {sortKeys.indexOf(this.props.sortBy) > -1 ? sortOptions[this.state.sortByMulti] : sortOptions[sortKeys[0]]}</span>
                    </OverlayTrigger>
                    {sortButtons}
                </div>
            );
        }
        return <div className="users-table-cell-head">
            <span>{fieldItem.name}</span>
            {sortButtons}
        </div>
    }
    cellMethod(options) {
        var columnKey = options.columnKey;
        var rowIndex = options.rowIndex;
        var fieldItem = this.props.fields[columnKey];
        var obj = this.props.data[rowIndex];
        var data = Helpers.getValueFromMap(obj, fieldItem.field);
        var content = <div>
            <p>{data || '-'}</p>
        </div>;
        return (<div key={columnKey} className="users-table-other-data-cell pad20-10">{content}</div>);
    }
}

export default Table;