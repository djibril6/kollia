import React from 'react';
import Calendar from '../Calendar';
import CalendarContainer from '../CalendarContainer';
import './SimpleCalendar.scss';

function SimpleCalendar() {
    const [currentDate, setCurrentDate] = React.useState(new Date());

    const goToNextMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
    }
    const goToPreviousMonth = () => {
        setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
    }
    return (
        <CalendarContainer>
            <div className="SimpleCalendar-container">
                <Calendar
                    currentDate={currentDate}
                    onClickPrev={() => goToPreviousMonth()}
                    onClickNext={() => goToNextMonth()}
                    onSelect={(date) => console.log(date)}
                />
            </div>
        </CalendarContainer>
    )
}

export default SimpleCalendar;
