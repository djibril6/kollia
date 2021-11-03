import React from 'react';
import './App.scss';
import { DatePicker, DoubleDatePicker } from './lib/components';

function App() {
  return (
    <div className="App">
      <DatePicker title="Title" setItemLabelValue={() => "1500 TL"} onSelect={value => console.log(value)} />
      <DoubleDatePicker title="Title" setItemLabelValue={() => "1500 TL"} onSelect={value => console.log(value)} />
    </div>
  );
}

export default App;
