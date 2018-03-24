import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = {lat: null, long: null};
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.setCoordinates.bind(this), this.error.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Locale</h1>
        <h1>Temp</h1>
        <h4>{`Your latitude is ${this.state.lat}`}</h4>
        <h4>{`Your longitude is ${this.state.long}`}</h4>
      </div>
    );
  }


  setCoordinates(pos) {
    let crd = pos.coords;
    this.setState({lat: crd.latitude, long: crd.longitude});
  }

  error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
}

export default Weather;
