import React from 'react';
import Calendar from '../Calendar';
import CalendarContainer from '../CalendarContainer';
import './SimpleCalendar.scss';

function SimpleCalendar() {
    return (
        <CalendarContainer>
            <div className="SimpleCalendar-container">
                <Calendar />
            </div>
        </CalendarContainer>
    )
}

export default SimpleCalendar;
