import React from 'react';


class Clock extends React.Component {
  constructor() {
    super();
    this.requestTime = new Date();
    this.date = this.requestTime.toDateString();
    this.time = this.requestTime.toTimeString().slice(0,8);
    this.state = {date: this.date, time: this.time};
    setInterval(this.tick.bind(this), 1000);
  }

  tick() {
    let requestTime = this.requestTime;
    requestTime.setSeconds(requestTime.getSeconds() + 1);
    this.date = this.requestTime.toDateString();
    this.time = this.requestTime.toTimeString().slice(0,8);

    this.setState({date: this.date, time: this.time});
  }



  render() {
    return (
      <div className="clock">
        <h3>{`${this.state['date']}`}</h3>
        <h3>{`${this.state['time']}`}</h3>
      </div>
    );
  }

}


export default Clock;
