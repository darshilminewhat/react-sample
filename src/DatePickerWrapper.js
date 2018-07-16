import React, { Component } from 'react';
import styled from 'styled-components';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';
import Helpers from './Helpers';

// import './react_dates_overrides.css'

const StyledWrapper = styled.div`
    .CalendarDay__selected{
        background: #8ff139;
        border: 1px solid #8ff139;
        color: white;
    }
    .CalendarDay__selected_span,.CalendarDay__selected_span:active, .CalendarDay__selected_span:hover{
        background: #8ff139;
        border: 1px solid #8ff139;
        color: white;
    }
    .CalendarDay__hovered_span, .CalendarDay__hovered_span:active, .CalendarDay__hovered_span:hover{
        background: #8ff139;
        border: 1px solid #8ff139;
        color: white;
    }
    .DayPickerNavigation{
        display: flex;
        justify-content: space-between;
        background-color: grey;
        height:30px;
    }
    .DayPickerNavigation_button:first-child{
        width:30px;
        margin-left:20px;
    }
    .DayPickerNavigation_button:last-child{
        width:30px;
        margin-right:20px;
    }
`;

class DatePickerWrapper extends Component {
    constructor(props) {
        super(props)
        this.onDateChange = this.onDateChange.bind(this)
        this.state = {}
    }
    render() {
        // .CalendarMonth_caption{
        //     background: yellow;
        // }
        return <div>
            This is Datepicker Wrapper
            {<StyledWrapper>
                <DateRangePicker
                    calendarInfoPosition="top"
                    renderCalendarInfo={() => (
                        <CalendarDurationItem startDate={this.state.startDate} endDate={this.state.endDate} onDatesChange={(obj) => this.onDateChange(obj)} />
                    )}
                    navPrev={<div>&#8249;</div>}
                    navNext={<div>&#8250;</div>}
                    isOutsideRange={(day) => !Helpers.isInclusivelyBeforeDay(day, moment())}
                    initialVisibleMonth={() => moment().subtract(1, 'months')}
                    startDate={this.state.startDate}
                    startDateId="startDate"
                    endDate={this.state.endDate}
                    endDateId="endDate"
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={focusedInput => this.setState({ focusedInput })}
                />
            </StyledWrapper>
            }
        </div>
    }
    onDateChange(obj) {
        this.setState(obj)
    }
}

const CalendarDurationItemWrapper = styled.div`
    div{
        padding: 20px 10px 0;
    }
    div a{
        text-decoration: none;
        color: #00aced;
        outline: none;
        border: none;
        cursor: pointer;
        margin-right: 20px;
    }    
`;

class CalendarDurationItem extends Component {
    constructor(props) {
        super(props);
        this.state = { ...props };
    }
    render() {
        const today = moment();
        const yesterday = moment().subtract(1, 'days');
        const presets = [{
            text: 'Today',
            start: today,
            end: today,
        },
        {
            text: 'Yesterday',
            start: yesterday,
            end: yesterday,
        },
        {
            text: 'Last 7 Days',
            start: moment().subtract(6, 'days'),
            end: today,
        },
        {
            text: 'Last 30 days',
            start: moment().subtract(29, 'days'),
            end: today,
        }];
        const { startDate, endDate } = this.state;
        return (
            <CalendarDurationItemWrapper>
                <div>
                    {presets.map(({ text, start, end }) => {
                        const isSelected = Helpers.isSameDay(start, startDate) && Helpers.isSameDay(end, endDate);
                        return (
                            <a key={text} onClick={() => this.props.onDatesChange({ startDate: start, endDate: end })}>
                                {text}
                            </a>
                        );
                    })}
                </div>
            </CalendarDurationItemWrapper>
        );
    }
    componentWillReceiveProps(nextProps) {
        this.setState(...nextProps)
    }

}

export default DatePickerWrapper