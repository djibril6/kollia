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

| Prop  | Type   | Default | Description            | Example values |
|-------|--------|---------|------------------------|----------------|
| title | string | n/a     | Title of the component | "Avaibility"   |
| lengend | string[] | ["Unavailable","Available"] | Lengends text |   |

## Author

[Djibril ISSOUFOU](https://github.com/djibril6)
