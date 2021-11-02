import React from 'react';
import { IDisableColor, IEnableColor, ITextColor } from '../../shared/interfaces';
import './CalendarContainer.scss';

interface ICalendarContainerProps extends 
    ITextColor,
    IDisableColor,
    IEnableColor
{
    children: React.ReactNode;
    title?: string;
    legends?: string[];
}
function CalendarContainer(props: ICalendarContainerProps) {
    return (
        <div className="CalendarContainer-container">
            <div className="calendar-container-header">
                <h1 ref={el => {
                    if (el) {
                        el.style.color = props.textColor || "";
                    }
                }}>{props.title}</h1>
                <div className="legend">
                    <div className="legend-item">
                        <span className="legend-item-icon disable-legend" ref={el => {
                            if (el) {
                                el.style.backgroundColor = props.disableColor?.color || "";
                                el.style.borderColor = props.disableColor?.borderColor || "";
                            }
                        }}></span>
                        <span className="legend-item-label" ref={el => {
                            if (el) {
                                el.style.color = props.disableColor?.textColor || "";
                            }
                        }}>{(props.legends && props.legends[0]) || "Unavailable"}</span>
                    </div>
                    <div className="legend-item">
                        <span className="legend-item-icon enable-legend" ref={el => {
                            if (el) {
                                el.style.backgroundColor = props.enableColor?.color || "";
                                el.style.borderColor = props.enableColor?.borderColor || "";
                                el.style.borderWidth = props.enableColor?.borderColor ? "1px" : "";
                                el.style.borderStyle = props.enableColor?.borderColor ? "solid" : "";
                            }
                        }} />
                        <span className="legend-item-label" ref={el => {
                            if (el) {
                                el.style.color = props.enableColor?.textColor || "";
                            }
                        }}>{(props.legends && props.legends[1]) || "Available"}</span>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
}

export default CalendarContainer;
