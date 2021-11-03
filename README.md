# Kollia

Deeply customizable UI Components for react.js applications.

## installation

To install this library, you can run:

`npm install kollia` or `yarn add kollia`

## Usage

Here's an example of basic usage:

```javascript
    import React from 'react';
    import { DatePicker } from 'kollia';

    function MyApp() {
        return (
            <div>
                <DatePicker 
                    title="Avaibility" 
                    setItemLabelValue={() => "€ 500"} 
                    onSelect={value => console.log(value)} />
            </div>
        );
    }
```

## Documentation

| Prop  | Type   | Default | Description            |
|-------|--------|---------|------------------------|
| title | string | n/a     | Title of the component |
| lengend | string[] | ["Unavailable","Available"] | Lengends text |
| className | string | n/a | Custom class name(s) that will be added |
| onSelect | (value: {startDate: Date, endDate: Date}) => void | n/a |
| setItemLabelValue | (date: Date) => string | n/a | function called to add custom label to each date (we have to return the label as a string)|
| textColor | string | #1A2B48 | Color of the text in the calendar |
| headerColor | string | #5E6D77 | color of the header text (day's names) |
| enableColor | {borderColor: string; color: string; textColor: string} | {borderColor: #dadcdd; color: #5191FA; textColor: #fff} | color config of the enabled dates |
| disableColor | {borderColor: string; color: string; textColor: string} | {borderColor: #dadcdd; color: #fff; textColor: #dadcdd} | color config of the disabled dates |
| activeColor | string | #FA5636 | color of the current date |
| hiddenColor | string | n/a | set color here to display date that are not in the current month |
| selectedColor | {color: string; backgroundColor: string} | {color: #fff; backgroundColor: #5191FA} | colors config of the selected dates |
| outerBorderColor | string | #dadcdd | border color of the calendar |
| innerBorderColor | string | #dadcdd | border color of each date in the calendar |
| headerBorderColor | string | #dadcdd | border color of the header bar |
| innerBorderRadius | number | 5 | border radius of each date in the calendar |
| outerBorderRadius | number | 5 | border width of the calendar |
| innerBorderWidth | number | 1 | border width of each date in the calendar |
| headerBorderWidth | number | 1 | border width of the header bar|
| disabledDates | Date[] | n/a | list of date to enable or disable dependind of the value of the `enableOnly` props |
| enableOnly | boolean | false | if true enable only the date provided in `disabledDates` props. All other dates will be disabled |

## Author

[Djibril ISSOUFOU](https://github.com/djibril6)
