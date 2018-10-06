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
    const startWeek = startday.startOf('month').week();

    const weeksInMonth = moment(moment(startday).endOf('month') - moment(startday).startOf('month')).weeks();

    const calendar = [];
    for (let i = 0; i < weeksInMonth; i++) {
      let week = moment(startWeek, 'w YYYY').add(i, 'week');
      week = moment(week).week();

      const startdayWeek = moment().week(week).format(format);

      calendar.push({
        week: week,
        days: Array(7).fill(0).map((n, j) => moment(startdayWeek, format).clone()
          .add(j, 'day').format('YYYY-MM-DD')),
      });
    }

    return (
      <div>
        {calendar.map(item =>
          <div className="week-component" key={item}>
            <div className="weeknumber">{item.week}</div>
            {item.days.map(day =>
            <div className="week" key={day}>
              {moment(day).format('DD')}
            </div>,
            )}
          </div>)}
        <div></div>
      </div>
    );
  }
}

export default Calendar;
