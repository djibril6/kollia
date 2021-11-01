import React from 'react';
import Calendar from '../Calendar';
import CalendarContainer from '../CalendarContainer';
import './DoubleCalendar.scss';

function DoubleCalendar() {
    return (
        <CalendarContainer>
            <div className="DoubleCalendar-container">
                <Calendar hideRightArrow />
                <Calendar hideLeftArrow />
            </div>
        </CalendarContainer>
    )
}

export default DoubleCalendar;
