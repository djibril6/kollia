import React from 'react';
import './CalendarContainer.scss';

interface ICalendarContainerProps {
    children: React.ReactNode;
    title?: string;
    legends?: string[];
}
function CalendarContainer(props: ICalendarContainerProps) {
    return (
        <div className="CalendarContainer-container">
            <div className="calendar-container-header">
                <h1>{props.title}</h1>
                <div className="legend">
                    <div className="legend-item">
                        <span className="legend-item-icon disable-legend"></span>
                        <span className="legend-item-label">{(props.legends && props.legends[0]) || "Unavailable"}</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-item-icon enable-legend"></span>
                        <span className="legend-item-label">{(props.legends && props.legends[1]) || "Available"}</span>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default CalendarContainer;
