import React, { Component } from 'react';

import style from './../scss/main.scss';
import Calendar from './calendar/calendar.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome the Weekview Calendar</h1>
        </header>
        <div>
          <Calendar />
        </div>
      </div>

    );
  }
}

export default App;
