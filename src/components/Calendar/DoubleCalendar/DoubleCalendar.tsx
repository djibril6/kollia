import React from 'react';
import Calendar from '../Calendar';
import CalendarContainer from '../CalendarContainer';
import { ICalendarProps } from '../SimpleCalendar/SimpleCalendar';
import './DoubleCalendar.scss';


function DoubleCalendar(props: ICalendarProps) {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [startDateLeft, setStartDateLeft] = React.useState<Date | null>();
    const [startDateRight, setStartDateRight] = React.useState<Date | null>();
    const [endDateLeft, setEndDateLeft] = React.useState<Date | null>();
    const [endDateRight, setEndDateRight] = React.useState<Date | null>();

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }
    const resetData = () => {
        setStartDateLeft(null);
        setStartDateRight(null);
        setEndDateLeft(null);
        setEndDateRight(null);
    }

    const returnCorrectValues = (dates:{
        startDate: Date;
        endDate: Date;
    }, left: boolean) => {
        const listDate = [];
        listDate.push(dates.startDate, dates.endDate);
        if (left) {
            if (startDateRight) listDate.push(startDateRight);
            if (endDateRight) listDate.push(endDateRight);
        } else {
            if (startDateLeft) listDate.push(startDateLeft);
            if (endDateLeft) listDate.push(endDateLeft);
        }

        const min = listDate.reduce(function (a, b) { return a < b ? a : b; }); 
        const max = listDate.reduce(function (a, b) { return a > b ? a : b; });

        return {startDate: min!, endDate: max!};
    }
    return (
        <CalendarContainer title={props.title} legends={props.legend}>
            <div className="DoubleCalendar-container">
                <Calendar
                    currentDate={currentDate}
                    value={{startDate: startDateLeft!, endDate: endDateLeft!}}
                    // value={{startDate: new Date(), endDate: new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()+ 7)}}
                    hideRightArrow
                    onClickPrev={() => goToPreviousMonth()}
                    onSelect={(date) => {
                        setStartDateLeft(date.startDate);
                        setEndDateLeft(date.endDate);
                        if (startDateRight) {
                            setEndDateLeft(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0))
                            setStartDateRight(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
                        }
                        
                        props.onSelect && props.onSelect(returnCorrectValues(date, true));
                        // if (condition) {
                        //     setEndDateLeft(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0))
                        // }
                    }}
                    setItemLabelValue={props.setItemLabelValue}
                />
                <Calendar
                    value={{startDate: startDateRight!, endDate: endDateRight!}}
                    currentDate={new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())}
                    onClickNext={() => goToNextMonth()}
                    hideLeftArrow
                    onSelect={(date) => {
                        setStartDateRight(date.startDate);
                        setEndDateRight(date.endDate);
                        props.onSelect && props.onSelect(returnCorrectValues(date, false));
                        if (startDateLeft) {
                            setEndDateLeft(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0))
                        }
                        if (endDateLeft) {
                            setStartDateRight(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
                        }
                    }}
                    setItemLabelValue={props.setItemLabelValue}
                />
            </div>

            <div className="resset-btn">
                <span onClick={() => resetData()}>Resset</span>
            </div>
        </CalendarContainer>
    )
}

export default DoubleCalendar;
