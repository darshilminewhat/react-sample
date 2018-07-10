import React, { Component } from 'react';
import './App.css';
import FixedTableWrap from './FixedDataTable';
import Helpers from './Helpers';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import sampleFields from './sampleFields';
import Paragraph from './Paragraph';

storiesOf('Fixed Data Table', module)
//   .add('Normal table', () => <div className="App-content"><Table data={[sampleFields.data]} fields={sampleFields.set1} /></div>)
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
    <Table data={sampleFields.data} fields={sampleFields.set4} />
    </div>
  ));

class Table extends Component {
    constructor(){
        super()
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
    headerMethod(options) {
        var fieldItem = this.props.fields[options.columnKey];
        return <div className="users-table-cell-head">
                <span>{fieldItem.name}</span>
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