import React from 'react';
import './Calendar.scss';

interface ICalendarProps {
    hideLeftArrow?: boolean;
    hideRightArrow?: boolean;
}
function Calendar(props: ICalendarProps) {
    return (
        <div className="calendar-container">
            <div className="calendar-title">
                <h2>November 2021</h2>
                {!props.hideLeftArrow && <div className="arrow arrow-left">
                    <span>&#10094;</span>
                </div>}
                {!props.hideRightArrow && <div className="arrow arrow-right">
                    <span>&#10095;</span>
                </div>}
            </div>
            <div className="calendar-header">
                <div className="calendar-header-item">Su</div>
                <div className="calendar-header-item">Mo</div>
                <div className="calendar-header-item">Tu</div>
                <div className="calendar-header-item">We</div>
                <div className="calendar-header-item">Th</div>
                <div className="calendar-header-item">Fr</div>
                <div className="calendar-header-item">Sa</div>
            </div>
            <div className="calendar-body">
                <div className="calendar-item enable">x</div>
                <div className="calendar-item enable">x</div>
                <div className="calendar-item active">x</div>
                <div className="calendar-item enable">x</div>
                <div className="calendar-item enable">x</div>
                <div className="calendar-item disable">x</div>
                <div className="calendar-item disable">x</div>
                <div className="calendar-item enable">x</div>
                <div className="calendar-item disable">x</div>
                <div className="calendar-item disable">x</div>
                <div className="calendar-item hidden">x</div>
                <div className="calendar-item disable">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item hidden">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item enable">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item hidden">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item enable">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item disable">x</div>
                <div className="calendar-item disable">x</div>
                <div className="calendar-item enable">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item disable">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item enable">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item hidden">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item hidden">x</div>
                <div className="calendar-item">x</div>
                <div className="calendar-item enable">x</div>
            </div>
        </div>
    )
}

export default Calendar
