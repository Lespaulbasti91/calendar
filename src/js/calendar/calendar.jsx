import React from 'react';
import moment from 'moment';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      today: moment('2018.12.28'),
    };
  }

  render() {
    const { today } = this.state;
    const format = 'YYYY.MM.DD';
    const startday = moment(today, format);
    const startWeek = startday.startOf('month').format('w YYYY');

    const weeksInMonth = moment(moment(startday).endOf('month') - moment(startday).startOf('month')).weeks();

    const calendar = [];
    for (let i = 0; i < weeksInMonth; i++) {
      let week = moment(startWeek, 'w YYYY').add(i, 'week');
      week = moment(week).format('w');

      const startdayWeek = moment(week, 'w YYYY').weekday(1).format(format);

      console.log(startdayWeek);
      calendar.push({
        week: week,
        days: Array(7).fill(0).map((n, j) => moment(startdayWeek, format).clone()
          .add(j, 'day').format('YYYY-MM-DD')),
      });
    }

    console.log(calendar);

    return (
      <div>
        {calendar.map((item, key) =>
          <div key={key}>
            {item.week}
            {item.days.map((day, index) => <div key={index}>{day}</div>)}
          </div>)}
        <div></div>
      </div>
    );
  }
}

export default Calendar;
