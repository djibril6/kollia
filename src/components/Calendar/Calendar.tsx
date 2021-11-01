import React from 'react';
import './Calendar.scss';

const months = [
    {
        "en": "January",
    },
    {
        "en": "February",
    },
    {
        "en": "March",
    },
    {
        "en": "April",
    },
    {
        "en": "May",
    },
    {
        "en": "June",
    },
    {
        "en": "Julay",
    },
    {
        "en": "August",
    },
    {
        "en": "September",
    },
    {
        "en": "October",
    },
    {
        "en": "November",
    },
    {
        "en": "December",
    },
];
const total = 6 * 7;
const days = [
    { index: 0, label: 'Su' },
    { index: 1, label: 'Mo' },
    { index: 2, label: 'Tu' },
    { index: 3, label: 'We' },
    { index: 4, label: 'Th' },
    { index: 5, label: 'Fr' },
    { index: 6, label: 'Sa' }
];
interface ICalendarProps {
    hideLeftArrow?: boolean;
    hideRightArrow?: boolean;
    currentDate: Date;
    onClickNext?: Function;
    onClickPrev?: Function;
    onSelect?: (date: Date) => void;
}
function Calendar(props: ICalendarProps) {
    const [listOfDays, setListOfDays] = React.useState<number[]>([]);

    React.useEffect(() => {
        const lastDate = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth() + 1, 0).getDate();
        const firstDay = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), 1).getDay();

        const list = Array.from({length: lastDate}, (_, index) => index + 1);
        for (let i = 0; i < firstDay; i++) {
            list.unshift(0);
        }
        const end = Array.from({length: total - list.length}, () => 0);
        list.push(...end);
        setListOfDays(list);
    }, [props.currentDate])

    const getClassName = (item: number) => {
        return item <= 0 ? " hidden" : " enable";
    }
    const handleDatePicked = (day: number) => {
        const date = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), day);
        props.onSelect && props.onSelect(date);
    }
    return (
        <div className="calendar-container">
            <div className="calendar-title">
                <h2>{months[props.currentDate.getMonth()].en} {props.currentDate.getFullYear()}</h2>
                {!props.hideLeftArrow && <div className="arrow arrow-left">
                    <span onClick={() => props.onClickPrev && props.onClickPrev()}>&#10094;</span>
                </div>}
                {!props.hideRightArrow && <div className="arrow arrow-right">
                    <span onClick={() => props.onClickNext && props.onClickNext()}>&#10095;</span>
                </div>}
            </div>
            <div className="calendar-header">
                {days.map((day, idx) => (
                    <div key={idx} className="calendar-header-item">{day.label}</div>
                ))}
            </div>
            <div className="calendar-body">
                {listOfDays.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={"calendar-item" + getClassName(item)}
                        onClick={() => handleDatePicked(item)}
                    >{item}</div>
                ))}
            </div>
        </div>
    )
}

export default Calendar
