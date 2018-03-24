import React from "react";
import ReactDOM from "react-dom";

import Clock from './clock';
import Tabs from './tabs';
import Root from './root';



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'));

});
