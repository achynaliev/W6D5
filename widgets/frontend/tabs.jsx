import React from 'react';


class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.tabs = props.tabs;
    this.state = {selected : 0};

  }

  render() {
    return (
      <div className="tabs">
        <header>
          <ul>
            <h1 onClick={this.changeState0.bind(this)}>{this.tabs[0].title}</h1>
            <h1 onClick={this.changeState1.bind(this)}>{this.tabs[1].title}</h1>
            <h1 onClick={this.changeState2.bind(this)}>{this.tabs[2].title}</h1>
          </ul>

        </header>

        <article>{this.tabs[this.state.selected].content}</article>
      </div>
  );
  }

  changeState2() {
    this.setState({selected: 2});
  }

  changeState0() {
    this.setState({selected: 0});
  }

  changeState1() {
    this.setState({selected: 1});
  }
}

export default Tabs;
