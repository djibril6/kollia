import React from 'react';
import { ITextColor, IEnableColor, IDisableColor, IOuterBorderColor, IOuterBorderRadius, IOuterBorderWidth, IActiveColor, IHeaderBorderColor, IHeaderBorderWidth, IHeaderColor, IHiddenColor, IInnerBorderColor, IInnerBorderRadius, IInnerBorderWidth, IInnerMargin, ISelectedColor } from '../../../shared/types';
import Calendar from '../Calendar';
import CalendarContainer from '../CalendarContainer';
import './SimpleCalendar.scss';


export interface ICalendarProps extends 
    Partial<ITextColor>,
    Partial<IEnableColor>,
    Partial<IDisableColor>,
    Partial<IOuterBorderColor>,
    Partial<IOuterBorderRadius>,
    Partial<IOuterBorderWidth>,
    Partial<IActiveColor>,
    Partial<IHeaderBorderColor>,
    Partial<IHeaderBorderWidth>,
    Partial<IHeaderColor>,
    Partial<IHiddenColor>,
    Partial<IInnerBorderColor>,
    Partial<IInnerBorderRadius>,
    Partial<IInnerBorderWidth>,
    Partial<IInnerMargin>,
    Partial<ISelectedColor>
{
    title?: string;
    legend?: string[];
    className?: string;
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
        <CalendarContainer
            title={props.title} legends={props.legend}
            enableColor={props.enableColor!}
            disableColor={props.disableColor!}
            textColor={props.textColor!}
            className={props.className!}
        >
            <div className="SimpleCalendar-container" ref={el => {
                if (el) {
                    el.style.borderColor = props.outerBorderColor || "";
                    el.style.borderWidth = (props.outerBorderWidth || "1") + "px";
                    el.style.borderRadius = (props.outerBorderRadius || "4") + "px";
                }
            }}>
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
                    activeColor={props.activeColor!}
                    disableColor={props.disableColor!}
                    enableColor={props.enableColor!}
                    headerBorderColor={props.headerBorderColor!}
                    headerBorderWidth={props.headerBorderWidth!}
                    headerColor={props.headerColor!}
                    hiddenColor={props.hiddenColor!}
                    innerBorderColor={props.innerBorderColor!}
                    innerBorderRadius={props.innerBorderRadius!}
                    innerBorderWidth={props.innerBorderWidth!}
                    textColor={props.textColor!}
                    selectedColor={props.selectedColor!}
                />
            </div>
        </CalendarContainer>
    )
}

export default SimpleCalendar;
