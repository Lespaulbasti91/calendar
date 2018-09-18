import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: moment(),
      week: moment().week(),
      year: moment.months(),
    };
  }

  render() {
    const format = 'DD.MM.YYYY';
    const startday = moment('28.12.2018', format);
    const startWeek = startday.startOf('month').week();
    const endWeek = startday.endOf('month').week();


    const calendar = [];
    for (let week = startWeek; week < endWeek; week++) {
      calendar.push({
        week,
        days: Array(7).fill(0).map((n, i) => startday.week(week).startOf('week').clone()
          .add(n + i, 'day')),
      });
    }

    console.log(calendar);

    return (
      <div>Calendar</div>
    );
  }
}

export default Calendar;
