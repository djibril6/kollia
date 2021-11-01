import React from 'react';
import './CalendarContainer.scss';

interface ICalendarContainerProps {
    children: React.ReactNode;
}
function CalendarContainer(props: ICalendarContainerProps) {
    return (
        <div className="CalendarContainer-container">
            <div className="calendar-container-header">
                <h1>Avaibility</h1>
                <div className="legend">
                    <div className="legend-item">
                        <span className="legend-item-icon disable-legend"></span>
                        <span className="legend-item-label">Unavailable</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-item-icon enable-legend"></span>
                        <span className="legend-item-label">Available</span>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default CalendarContainer;
