import React, { Component } from 'react';

import style from '../scss/main.scss';
import Calendar from './calendar/calendar';
import DragAndDrop from './draganddrop/draganddropComponent';

const App = () => {
  return (
    <div className="App">
      <DragAndDrop />
      <Calendar />
    </div>
  );
};

export default App;
