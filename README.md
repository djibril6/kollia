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
| textColor | string | # | Color of the text in the calendar |
| headerColor | string | # | color of the header text (day's names) |
| enableColor | {borderColor: string; color: string; textColor: string} | # | color config of the enabled dates |
| disableColor | {borderColor: string; color: string; textColor: string} | # | color config of the disabled dates |
| activeColor | string | # | color of the current date |
| hiddenColor | string | # | set color here to display date that are not in the current month |
| selectedColor | {color: string; backgroundColor: string} | # | colors config of the selected dates |
| outerBorderColor | string | # | border color of the calendar |
| innerBorderColor | string | # | border color of each date in the calendar |
| headerBorderColor | string | # | border color of the header bar |
| innerBorderRadius | number | # | border radius of each date in the calendar |
| outerBorderRadius | number | # | border width of the calendar |
| innerBorderWidth | number | # | border width of each date in the calendar |
| headerBorderWidth | number | # | border width of the header bar|
| disabledDates | Date[] | n/a | list of date to enable or disable dependind of the value of the `enableOnly` props |
| enableOnly | boolean | false | if true enable only the date provided in `disabledDates` props. All other dates will be disabled |

## Author

[Djibril ISSOUFOU](https://github.com/djibril6)
