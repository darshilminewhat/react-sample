// var Reflux = require('reflux');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './FixedDataTable.css';
var FixedDataTable = require('fixed-data-table-2');
// var actions = require('../../settings/actions/actions');
var Table = FixedDataTable.Table;
var Column = FixedDataTable.Column;
var $ = require('jquery');
var _ = require('underscore');
// import Utils from "../utilities/Utils";

class FixedTableWrap extends Component{
    // mixins: [
    //     Reflux.listenTo(actions.triggerResize, 'resizeListener')
    // ],
    constructor() {
        super()
        this.state = {
            width: null
        };
    }
    render() {
        if (!this.state.width) {
            return (
                <div style={{height: '1px', width: '100%'}}></div>
            );
        }
        var fields = this.calculateFieldWidths();
        var columns = [];
        for (var i = 0; i < fields.length; i++) {
            var item = fields[i];
            columns.push(<Column key={i} header={this.props.headerMethod} fixed={item.fixed} isResizable={false}
                                 cell={this.props.cellMethod} width={item.width} columnKey={i}/>);
        }
        var noHeaderClass = this.props.noHeader ? " data-table-no-head" : "";
        return (
            <div ref={"fixedDataTableWidthWrapper"} className={noHeaderClass}>
                <Table {...this.props.tableProps} width={this.state.width}>
                    {columns}
                </Table>
            </div>
        );
    }
    componentDidMount() {
        var element = ReactDOM.findDOMNode(this);
        var positionInfo = element.getBoundingClientRect();
        this.setState({width: positionInfo.width});
        $(window).on('resize.FixedTableWrap', this.resizeListener)
    }
    componentWillUnmount() {
        $(window).off('resize.FixedTableWrap')
    }
    resizeListener() {
        if (this.refs && this.refs.fixedDataTableWidthWrapper) {
            var element = $(this.refs.fixedDataTableWidthWrapper);
            this.setState({width: element.width()});
        }
    }
    calculateFieldWidths() {
        var width = this.state.width;
        var fieldWidthTotal = 0;
        var fixedTotalWidth = 0;
        // var fields = _.clone(this.props.fields);        
        var fields = this.props.fields.slice();        
        for (var i = 0; i < fields.length; i++) {
            fields[i] = _.clone(fields[i]);
            fieldWidthTotal += fields[i].width;
            if(fields[i].fixed)
                fixedTotalWidth += fields[i].width
        }
        if (fieldWidthTotal < width) {
            for (var i = 0; i < fields.length; i++) {
                if(!fields[i].fixed)
                    fields[i].width = fields[i].width / (fieldWidthTotal - fixedTotalWidth) * (width - fixedTotalWidth);
            }
            fields[i - 1].width = fields[i - 1].width - 1;
        }
        // fields[i - 1].width--;
        return fields;
    }
}

FixedTableWrap.defaultProps = {
    fields: [],
    tableProps: {},
    headerMethod: null,
    cellMethod: null
};

export default FixedTableWrap;
