import React from 'react';
import './App.scss';
import { Calendar, DoubleCalendar } from './components';

function App() {
  return (
    <div className="App">
      <Calendar title="Title" setItemLabelValue={() => "1500 TL"} onSelect={value => console.log(value)} />
      <DoubleCalendar title="Title" setItemLabelValue={() => "1500 TL"} onSelect={value => console.log(value)} />
    </div>
  );
}

export default App;
