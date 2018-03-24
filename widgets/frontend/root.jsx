import React from "react";

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const Root = () => {
  let tabs = [{title: "One", content: "racing cars are cool"},
   {title: "Two", content: "Elon Musk is cool"},
   {title: "Three", content: "all submarines are yellow"}];
  return (
    <div>
      <Clock />
      <Tabs tabs={tabs}/>
      <Weather />
    </div>
  );
};


export default Root;
