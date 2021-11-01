import React from 'react';
import Calendar from '../Calendar';
import CalendarContainer from '../CalendarContainer';
import './DoubleCalendar.scss';

function DoubleCalendar() {
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }
    return (
        <CalendarContainer>
            <div className="DoubleCalendar-container">
                <Calendar
                    currentDate={currentDate}
                    hideRightArrow
                    onClickPrev={() => goToPreviousMonth()}
                />
                <Calendar
                    currentDate={new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate())}
                    onClickNext={() => goToNextMonth()}
                    hideLeftArrow
                />
            </div>
        </CalendarContainer>
    )
}

export default DoubleCalendar;
