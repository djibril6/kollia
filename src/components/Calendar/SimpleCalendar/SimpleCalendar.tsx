import React from 'react';
import Calendar from '../Calendar';
import CalendarContainer from '../CalendarContainer';
import './SimpleCalendar.scss';

export interface ICalendarProps {
    title?: string;
    legend?: string[];
    onSelect?: (value: {startDate: Date, endDate: Date}) => void;
    setItemLabelValue?: (date: Date) => string;
}
function SimpleCalendar(props: ICalendarProps) {
    const [currentDate, setCurrentDate] = React.useState(new Date());
    const [startDate, setStartDate] = React.useState<Date>();
    const [endDate, setEndDate] = React.useState<Date>();

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }
    return (
        <CalendarContainer title={props.title} legends={props.legend}>
            <div className="SimpleCalendar-container">
                <Calendar
                    currentDate={currentDate}
                    value={{startDate: startDate!, endDate: endDate!}}
                    onClickPrev={() => goToPreviousMonth()}
                    onClickNext={() => goToNextMonth()}
                    onSelect={(date) => {
                        setStartDate(date.startDate);
                        setEndDate(date.endDate);
                        props.onSelect && props.onSelect({startDate:date.startDate, endDate: date.endDate});
                    }}
                    setItemLabelValue={props.setItemLabelValue}
                    // disabledDates={[new Date()]}
                />
            </div>
        </CalendarContainer>
    )
}

export default SimpleCalendar;
