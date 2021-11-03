import React from 'react';
import { IActiveColor, IDisableColor, IEnableColor, IHeaderBorderColor, IHeaderBorderWidth, IHeaderColor, IHiddenColor, IInnerBorderColor, IInnerBorderRadius, IInnerBorderWidth, ISelectedColor, ITextColor } from '../../shared/types';
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
interface ICalendarProps extends
    ITextColor,
    IHeaderColor,
    IHeaderBorderColor,
    IHeaderBorderWidth,
    IInnerBorderColor,
    IInnerBorderRadius,
    IInnerBorderWidth,
    IEnableColor,
    IActiveColor,
    IHiddenColor,
    IDisableColor,
    ISelectedColor
{
    hideLeftArrow?: boolean;
    hideRightArrow?: boolean;
    currentDate: Date;
    range?: boolean;
    value?: {startDate: Date, endDate: Date};
    disabledDates: Date[];
    enableOnly: boolean;
    onClickNext?: Function;
    onClickPrev?: Function;
    onSelect?: (date: {startDate: Date, endDate: Date}) => void;
    setItemLabelValue?: (date: Date) => string;
    // onFistDateSelected?: (date: Date) => void;
}
function Calendar(props: ICalendarProps) {
    const [listOfDays, setListOfDays] = React.useState<number[]>([]);
    const [selection, setSelection] = React.useState(false);
    const [startDate, setStartDate] = React.useState<Date>();
    const [endDate, setEndDate] = React.useState<Date>();

    const resetData = () => {
        setSelection(false)
    }

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

        if (props.value?.endDate === null || props.value?.startDate === null) {
            resetData();
        }
    }, [props.currentDate, props.value])

    // React.useEffect(()=> {
    //     setSelection(!selection);
    // }, [props.value])

    const getClassName = (item: number) => {
        let className = props.enableOnly ? " disable": " enable";
        if (item <= 0) {
            className = " hidden";
        } else if (props.disabledDates && props.disabledDates.length > 0) {
            props.disabledDates.forEach(el => {
                if (
                    el.getFullYear() === props.currentDate.getFullYear() 
                    && el.getMonth() === props.currentDate.getMonth()
                    && el.getDate() === item
                ) {
                    className =  props.enableOnly ? " enable": " disable";
                }
            });
        }
        
        const current = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), item);
        

        if (props.value && props.value.startDate <= current && props.value.endDate >= current) {
            className =  className === " disable" ? " disable": " selected";
        }

        if (
            current.getFullYear() === new Date().getFullYear() 
            && current.getMonth() === new Date().getMonth()
            && current.getDate() === new Date().getDate()
        ) {
            className +=  " active";
        }

        return className;
    }

    const reorderDate = (date1: Date, date2: Date) => {
        return date1 < date2 ? {endDate: date2, startDate: date1}: {endDate: date1, startDate: date2};
    };
    const handleDatePicked = (day: number) => {
        const date = new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), day);
        if (selection) {
            setEndDate(date);
            props.onSelect && props.onSelect(reorderDate(date, startDate!));
        } else {
            setStartDate(date);
            props.onSelect && props.onSelect({endDate: date, startDate: date});
            // props.onFistDateSelected && props.onFistDateSelected(date);
        }
        setSelection(!selection);
    }
    return (
        <div className="calendar-container">
            <div className="calendar-title">
                <h2 ref={el => {
                    if (el) {
                        el.style.color = props.textColor || "";
                    }
                }}>{months[props.currentDate.getMonth()].en} {props.currentDate.getFullYear()}</h2>

                {!props.hideLeftArrow && <div className="arrow arrow-left">
                    <span 
                        onClick={() => props.onClickPrev && props.onClickPrev()}
                        ref={el => {
                            if (el) {
                                el.style.color = props.headerColor || "";
                            }
                        }}
                    >&#10094;</span>
                </div>}
                {!props.hideRightArrow && <div className="arrow arrow-right">
                    <span 
                        onClick={() => props.onClickNext && props.onClickNext()}
                        ref={el => {
                            if (el) {
                                el.style.color = props.headerColor || "";
                            }
                        }}
                    >&#10095;</span>
                </div>}
            </div>
            <div className="calendar-header" ref={div => {
                if (div) {
                    div.style.borderColor = props.headerBorderColor || "";
                    div.style.borderWidth = (props.headerBorderWidth || "1") + "px";
                }
            }}>
                {days.map((day, idx) => (
                    <div key={idx} className="calendar-header-item" ref={el => {
                        if (el) {
                            el.style.color = props.headerColor || "";
                        }
                    }}>{day.label}</div>
                ))}
            </div>
            <div className="calendar-body">
                {listOfDays.map((item, idx) => (
                    <div 
                        key={idx} 
                        className={"calendar-item" + getClassName(item)}
                        onClick={() => handleDatePicked(item)}
                        ref={el => {
                            if (el) {
                                el.style.borderColor = props.innerBorderColor || "";
                                el.style.borderRadius = (props.innerBorderRadius || "5") + "px";
                                el.style.borderWidth = (props.innerBorderWidth || "1") + "px";

                                switch (getClassName(item)) {
                                    case " enable":
                                        el.style.color = props.enableColor?.color || "";
                                        break;
                                    case " disable":
                                        el.style.color = props.disableColor?.color || "";
                                        break;
                                    case " active":
                                        el.style.color = props.activeColor || "black";
                                        break;
                                    case " hidden":
                                        el.style.color = props.hiddenColor || "";
                                        el.style.visibility = props.hiddenColor ? "visible" : "";
                                        break;
                                    case " selected":
                                        el.style.color = props.selectedColor?.color || "";
                                        el.style.backgroundColor = props.selectedColor?.backgroundColor || "";
                                        break;
                                
                                    default:
                                        break;
                                }
                            }
                        }}
                    >
                        {item}
                        {props.setItemLabelValue && <div className="calendar-item-extra">
                            {props.setItemLabelValue(new Date(props.currentDate.getFullYear(), props.currentDate.getMonth(), item)) }
                        </div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calendar
